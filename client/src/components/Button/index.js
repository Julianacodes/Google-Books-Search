import React from "react";
import { Button } from 'semantic-ui-react';
import "./index.css"

function ButtonUi (props){
    return(
        <Button onClick={props.handleSubmit} color={props.color} className={props.className}>
            {props.text}
        </Button>
    )
};

export default ButtonUi