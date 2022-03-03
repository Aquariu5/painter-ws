import { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cl from '../styles/Toolbar.module.css';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import { observer } from "mobx-react-lite";
import toolbar from "../store/toolbar";
export const Toolbar = observer(() => {

    const takeBrush = () => {
        toolbar.setToolbar('brush');
    }
    const clearArea = () => {
        toolbar.context.clearRect(0, 0, toolbar.canvas.width, toolbar.canvas.height);
    }

    const sendMessage = () => {

        
        // ws.onopen((data) => {
        //     console.log('opened', data);
        // });

        // ws.onmessage((data) => {
        //     console.log('message', data);
        // })
    }

    return (
        <Grid container className={cl.Toolbar}>
            Панель инструментов
            <FormatPaintIcon fontSize="large" onClick={takeBrush} className={cl.Icon}/>
            <LayersClearIcon fontSize="large" onClick={clearArea} />
            <Button variant="primary" onClick={sendMessage}>WS</Button>
        </Grid>
    )
});

export default Toolbar