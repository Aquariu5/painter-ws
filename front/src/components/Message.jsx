import { Grid } from "@mui/material";

import { useState } from "react";
import cl from '../styles/Chat.module.css';
import toolbar from "../store/toolbar";
const Message = ({name, body}) => {
    //const [test, setTest] = useState('');
    let own = toolbar.ownname == name ? true : false;
    return (
        <div className={cl.Message} style={{marginLeft: own ? 'auto' : '0px'}}>
            <div>
                <p>From: {name}</p>
                <p>Text: {body}</p>
            </div>


        </div>
    )
}

export default Message