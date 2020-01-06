import React from 'react';
import {Button} from "reactstrap";


const Buttons = (props) => {
    return (
        <div>
            <Button onClick={props.onclick} color="warning">warning</Button>
        </div>
    );
};

export default Buttons;