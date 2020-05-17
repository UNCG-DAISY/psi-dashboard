/*
    All functions related to storm api calls
*/

import { Request,Response,NextFunction } from "express"
import {asyncHandler} from '../../middleware/v1/async' //to avoid putting try catch everywhere
import {UserModel} from '../../models/User'
//import {ArchiveModel} from '../../models/Archive'

//import {ErrorResponse} from '../../utils/v1/errorResponse'
//import {StormModel} from '../../models/Storm'
//import axios from 'axios'
//import { ObjectID } from "mongodb"

import {UserDocument,StormDocument,ArchiveDocument} from '../../index'
//import { promises } from "dns"

/**
 * @desc        Gets all storms
 * @route       GET /api/v1/storms/:userId
 * @access      Public
 * @returns     yes
 */
const getAllStorms = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(res.advancedResults)
})


/**
 * @desc        Gets all storms of a user 
 * @route       GET /api/v1/storms/:userId
 * @access      Public
 * @returns     yes
 */
const getStormsOfUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    //Get all storms that gets completed in advResults
    const storms = res.advancedResults.data
    const userId = req?.params?.userId

    //Find the user by id
    const user:UserDocument = (await UserModel.find({
        "_id":userId
    }))[0]

    //Do we want to get all taggable storms/archives of this user, or just all
    const taggableFilter= req?.query?.taggable ?? false

    const stormsOfUser = user.storms
    let data = []

    //For each storm that exists
    await Promise.all(storms.map((storm:StormDocument,index:number)=>{

        //If that storm is part of the users storms,add it to the data to be returned
        if(stormsOfUser.includes(storm._id)) {
            let stormOfUser = storm
            
            //Get all archives
            let archivesOfStorm:[ArchiveDocument] = stormOfUser.archives
            let archivesToReturn:ArchiveDocument[] = archivesOfStorm

            //If we just want taggalbe archives, filter
            if(taggableFilter) {
                archivesToReturn = archivesOfStorm.filter(function(archive) {
                    return archive?.taggable;
                });
                
            }

            //Push this data on to the user and the data to return
            stormOfUser.archives = archivesToReturn
            data.push(stormOfUser)
        }
    }))
    res.advancedResults.data=data
    res.status(200).json(res.advancedResults)
})

/**
 * @desc        Gets a storm by Id
 * @route       GET /api/v1/storms/storm/:stormId/:userId
 * @access      Public
 * @returns     yes
 */
const getStorm = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    console.log(res.advancedResults)
    
    res.status(200).json(res.advancedResults)
})

// /**
//  * @desc        creates a storm
//  * @route       POST /api/v1/storms/storm/
//  * @access      Public
//  * @returns     yes
//  */
// const createStorm = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    
//     // req.body.id = req.user.id
//     // const new_storm = await StormModel.create(req.body)

//     res.status(201).json({
//         success:false,
//         data:{
//             smile:':}'
//         }
//     })        
// })

export {
    getAllStorms,
    getStorm,
    getStormsOfUser
    //createStorm
}