import { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cl from '../styles/Toolbar.module.css';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import LayersClearIcon from '@mui/icons-material/LayersClear';
import { observer } from "mobx-react-lite";
import toolbar from "../store/toolbar";
import Tooltip from '@mui/material/Tooltip';
import Slider from '@mui/material/Slider';
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
            <Tooltip title="Кисть" placement="top">
                <FormatPaintIcon fontSize="large" onClick={takeBrush} className={cl.Icon}/>
            </Tooltip>

            <Tooltip title="Очистить" placement="top">
                <LayersClearIcon fontSize="large" onClick={clearArea} />
            </Tooltip>

            <Tooltip title="Цвет" placement="top">
                <input type='color' onChange={e => toolbar.setColor(e.target.value)} className={cl.Color}/>
            </Tooltip>

            <Slider
                defaultValue={50}
                size="small" 
                aria-label="Default"
                valueLabelDisplay="auto"
                style={{width: '100px', marginLeft: '20px'}}
                value={toolbar.width}
                onChange={e => toolbar.setWidth(e.target.value)}
            />
            {/* <Button variant="primary" onClick={sendMessage}>WS</Button> */}
        </Grid>
    )
});

export default Toolbar