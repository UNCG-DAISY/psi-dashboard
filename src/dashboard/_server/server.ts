#!/usr/bin/env ts-node-script
/*
    This is the main server file.
*/

//imports
import express, { Application } from 'express' //God tier package for web framework
import { Request,Response,NextFunction } from "express" //Used for typing
import path from 'path'
import dotenv from 'dotenv' //Loads enviroment variables
//import morgan from 'morgan'
import fileupload from 'express-fileupload'
import colors from 'colors' //Allows for color in the terminal
colors
import {connectDB} from './db' //Function that connects to the DB
import {errorHandler} from './middleware/v1/error' //Generic function to handle erros
//Next js module that allows us to run nextjs and server
import next from 'next'

//Load route files
import users from './routes/v1/user' //Api calls for user
import archives from './routes/v1/archives'//Api calls for archives
import catalogs from './routes/v1/catalogs'//Api calls for storms
//import roles from './routes/v1/roles'//Api calls for roles
import testApi from './routes/v1/testApi' 
import image from './routes/v1/image' 
import questionSet from './routes/v1/questionSet' 
//Import the react/server shared constants

//Packages for security
// 1 - importing dependencies
import session from "express-session";
let MemoryStore = require('memorystore')(session)
import passport from "passport";
import Auth0Strategy from "passport-auth0";
import uid from 'uid-safe';
import {authRoutes} from "./utils/v1/auth-routes"//Handles login and logout

import fs from 'fs';
import https from 'https'

import bodyParser from 'body-parser'
import cors from 'cors'

import colorize from './utils/v1/colorize'

import {
    logger,
    expressLogger
} from './utils/v1/logger'

// Load env vars
dotenv.config({  
    path: './_config/config.env'
});

//Determine what enviroment mode we are in.
const dev = process.env.NODE_ENV !== 'production'

//This is telling to let next.js, the react server side rendering package, to handle routing
const nextApp = next({ 
    dev,
    dir:dev ? './_site': './_site/' 
})//relative to package.json
const handle = nextApp.getRequestHandler()

// https://github.com/node-fetch/node-fetch/issues/19#issuecomment-369653134
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//https keys
const cert = fs.readFileSync('/home/shahnafis/ssl/coastalimagelabeler_science.crt');
const ca = fs.readFileSync('/home/shahnafis/ssl/coastalimagelabeler_science.ca-bundle');
const key = fs.readFileSync('/home/shahnafis/ssl/private.key');
//console.log(cert,ca)

const https_options = {
    //key: fs.readFileSync('./_config/key.pem'),
    //cert:fs.readFileSync('./_config/cert.pem')
    cert:cert, 
    ca:ca,
    key:key
}

nextApp.prepare()
.then(async () => {


    //Connect to DB via Mongoose
    connectDB()

    //Create our application
    const app: Application = express();

    // Enable reverse proxy support in Express. This causes the
    // the "X-Forwarded-Proto" header field to be trusted so its
    // value can be used to determine the protocol. See 
    // http://expressjs.com/api#app-settings for more details.
    app.enable('trust proxy');
    //Security
    // 2 - add session management to Express
    const sessionConfig = {
        secret: uid.sync(18),
        cookie: {
        maxAge: 86400 * 1000 // 24 hours in milliseconds
        },
        resave: false,
        saveUninitialized: true,
        store: new MemoryStore({
            checkPeriod: 86400000 // prune expired entries every 24h
        }),
    };
    app.use(session(sessionConfig));

    // 3 - configuring Auth0Strategy
    const auth0Strategy = new Auth0Strategy(
        {
            domain: process.env.AUTH0_DOMAIN,
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            callbackURL: process.env.AUTH0_CALLBACK_URL
        },
        function(accessToken, refreshToken, extraParams, profile, done) {
            return done(null, profile);
        }
    );

    // 4 - configuring Passport
    passport.use(auth0Strategy);
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    // 5 - adding Passport and authentication routes
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(authRoutes);

    // 6 - you are restricting access to some routes
    const restrictAccess = (req: Request, res: Response, next: NextFunction) => {
        if (!req.isAuthenticated()) return res.redirect("/login");
        next();
    };
 
    // Body parser so that json can be recieved on Api calls
    app.use(express.json())
    //app.use(bodyParser.json())

    // Allow cors everywhere
    app.use(cors())

    //Allow for File upload
    app.use(fileupload())
    //Static files
    //Example: amenadiel/a420/420_test.png
    app.use(express.static(path.join(__dirname,'./_data/storms')))

    //logging
    app.use(expressLogger)

    //http to https redirect?
    app.use (function (req, res, next) {
        if (req.secure) {
            //console.log("Connection is secure")
            // request was via https, so do no special handling
            next();
        } else {
            console.log("Redirecting http to https");
            // request was via http, so redirect to https
            res.redirect('https://' + req.headers.host + req.url);
        }
    });
   

    //Mount routers, appi calls
    //The first parameter is the name of the path and the 2nd is the file to use if an Api call with that path is received
    //For example
    // /api/v1/users/getUsername would be in the users.
    app.use('/api/v1/users',users)
    app.use('/api/v1/archives',archives)
    app.use('/api/v1/catalogs',catalogs)
    //app.use('/api/v1/roles',roles)
    app.use('/api/v1/test',testApi)
    app.use('/api/v1/images',image)
    app.use('/api/v1/questionset',questionSet)
    
    // This handles errors that happen during API calls
    app.use(errorHandler)

    //Only pages with /auth at the beginning need to be restricted
    app.use("/auth/*", restrictAccess);

    //Everything else is a webpage
    app.get('*', (req, res) => {
        return handle(req, res)
    })

    

    //Get the port and have the site on that port
    const PORT = (process.env.PORT as unknown as number) ?? 5000;

    https.createServer(https_options, app)
        .listen(PORT, function () {
        console.log(`Server running on HTTPS ${PORT}!`)
    })

    app.listen(80, () => console.log(`Listening to port 80 for HTTP redirect`))

    // const server = app.listen(PORT,() => {
        
    //     //@ts-ignore
    //     colorize.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    //     //console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold.underline)
    // })

    //Handle unhandled promise rejections
    process.on('unhandledRejection', (err:any,promise: Promise<any>) => {

        // console.log(`Error: ${err?.message ?? 'undefined error'}`.red)
        colorize.error(`Error: ${err?.message ?? 'undefined error'}`)
        
        //Exit server on fail
        // server.close(() => {
        //     process.exit(1)
        // })
    })
  
})
.catch((ex) => {
    //If any error, exit
    console.error(ex.stack)
    process.exit(1)
})
