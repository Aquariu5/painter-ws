//import express from 'express'
const express = require('express');
const { copyFileSync } = require('fs');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const wsServer = require('express-ws')(app);
const wss = wsServer.getWss();
const bodyParser = require('body-parser');

const port = 5000;
app.use(cors())
app.use(express.json())

app.ws('/', (ws, res) => {
    ws.send(JSON.stringify('Successfull connection'));
    
    ws.on('message', (data) => {
        data = JSON.parse(data);
        console.log('jsdata', data);
        switch (data.method) {
            case 'connection': 
                ws.send(JSON.stringify({
                    id: data.id,
                    method: 'success',
                    name: data.name
                }));
            case 'paint':
                broadCastSend(ws, data);
                break;

            default:
                break;
            
        }
        console.log('data', data);
    })
});

const broadCastSend = (ws, data) => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify({
            method: 'paint',
            x: data.x,
            y: data.y,
            action: data.action,
            name: data.name
        }));
    })
}

// app.get('/', (req,res) => {
//     console.log(req.body);
//     console.log('p')
// });

app.listen(port, console.log('Работает на 5000'));