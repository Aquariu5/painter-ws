import { Grid } from "@mui/material";

import { useState } from "react";
import cl from '../styles/Chat.module.css';
import toolbar from "../store/toolbar";
import Card from '@mui/material/Card'
const Message = ({name, body}) => {
    //const [test, setTest] = useState('');
    let own = toolbar.ownname == name ? true : false;
    return (
        <Card variant="outlined"  className={cl.Message} style={{marginLeft: own ? 'auto' : '0px'}}>
                <p className={cl.MessageFrom}>{name}</p>
                <p className={cl.MessageText}>{body}</p>
        </Card>
        // <div className={cl.Message} style={{marginLeft: own ? 'auto' : '0px'}}>
        //         <p className={cl.MessageFrom}>{name}</p>
        //         <p className={cl.MessageText}>{body}</p>
        // </div>
    )
}

export default Message