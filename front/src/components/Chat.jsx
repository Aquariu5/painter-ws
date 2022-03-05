import { useState } from "react";
import cl from '../styles/Chat.module.css';
import { Button, TextField } from "@mui/material";
import Message from "./Message";
import { useRef } from "react";
import axios from "axios";
import toolbar from "../store/toolbar";
import { observer } from "mobx-react-lite";
const Chat = observer(() => {
    
    const text = useRef();
   // const [text, setText] = useState('');
    const sendMessage = () => {
        let msg = text.current.querySelector('input').value;
        //axios.post('http://localhost:5000/message', {text: msg, name: toolbar.ownname});
        let body = {
            method: 'message',
            text: msg,
            name: toolbar.ownname
        };
        console.log('body', body);
        toolbar.ws.send(JSON.stringify(body));
    }
    return (
         <div className={cl.Chat}>
                <div>
                    {
                        toolbar.messages.map(msg => <Message name={msg.name} body={msg.text}/>)
                    }
                </div>
                <div className={cl.Button}>
                    <TextField
                    fullWidth
                    label="Сообщение"
                    //value={text}
                    //onChange={e => setText(e.target.value)}
                    variant="standard"
                    ref = {text}
                    style={{background: 'white'}} />
                    <Button variant="contained" onClick={sendMessage}>Отправить</Button>

                </div>

         </div>
    )
})

export default Chat