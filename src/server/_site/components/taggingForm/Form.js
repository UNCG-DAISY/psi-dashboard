import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import RadioButton from '../radio/RadioButton'
import Radio from '@material-ui/core/Radio';

import RadioButtonGroup from '../radio/RadioButtonGroup'

import RadioButtonQuestions from './RadioButtonQuestions'
export default class Form extends React.Component {
    state = {
        ...this.props.tags
    }
   

    updateRadio = (params) => {
        this.setState({
            [params.key]:params.value
        })
    }
    render() {
        return (
            <CardContent>
                {JSON.stringify(this.state)}
                <Typography variant="h6" color="textSecondary" component="p">
                    Image Classification Categories
                </Typography>
                <RadioButtonQuestions
                    state = {
                        this.state.devType
                    }
                    updateFunction = {this.updateRadio}
                />
                
            </CardContent>
        )
    }
}