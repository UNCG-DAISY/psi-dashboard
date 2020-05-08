//Configuration for development radio

import React from 'react';
import CustomRadioButton from '../customRadioButton'
import * as colors from '@material-ui/core/colors/';
import Radio from '@material-ui/core/Radio';

export default function DevRadio(props) {

    
    return(
        <CustomRadioButton 
            value = {props.devType} 
            onChange = {(event) => {
                props.update({
                    type:'updateRadio',
                    key:'devType',
                    value:event.target.value
                })
            }}
            style = {{color:colors.green[500]}}
            title = {`Development Type`}
            ariaLabel = "devType" 
            name = "devType"
            buttons={[
                {
                    value:"0",
                    control: <Radio color="primary" />,
                    label: "Undeveloped",
                    labelPlacement:"end"
                },
                {
                    value:'1',
                    control: <Radio color="primary" />,
                    label: "Developed",
                    labelPlacement:"end"
                }
            ]}
        />
    )
}

// props.handleChange(event,props.setDevType)