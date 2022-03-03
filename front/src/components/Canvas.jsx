import { useContext, useEffect, useRef, useState } from "react";
import cl from '../styles/Canvas.module.css';
import toolbar from "../store/toolbar";
import { observer } from "mobx-react-lite";
import Name from "./Name";
const Test = observer(({children}) => {
    const canvas = useRef();
    //const ctx =  canvas.getContext('2d');
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [display, setDisplay] = useState('none');
    console.log('nameslen', toolbar.names.length);
    const [ownname, setOwnname] = useState('');
    useEffect(() => {
        toolbar.setCanvas(canvas.current);
        let ws = new WebSocket('ws://localhost:5000/');
        toolbar.setWs(ws);
        
        toolbar.ws.onopen = () => {
            console.log('opened');
            let id = (Math.random() * 100).toFixed(0);
            const data = {
                id: id,
                method: 'connection',
                name: 'client' + id
            }
            //setOwnname('client' + id);
            toolbar.ownname = 'client' + id;
            toolbar.ws.send(JSON.stringify(data));
        }

        toolbar.ws.onmessage = (data) => {
            console.log('mes', data);
            data = JSON.parse(data.data);
            switch (data.method) {
                case 'paint':
                    toolbar.draw(data.x, data.y, data.action);
                    toolbar.addName(data.name);
                    toolbar.changePositionByName(data.name, data.x, data.y + 100);
                    // setTop(data.y + 100);
                    // setLeft(data.x);
                    // setDisplay('block');
                    //window.getElementById('names').appendChild('div');

                    break;
                case 'success':
                    toolbar.addName(data.name);
                    break;
            }
        }
        //console.log('canvas', toolbar.canvas);
    }, []);
    const [toggle, setToggle] = useState(false);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <canvas 
                width={window.innerWidth - 50}
                height={window.innerHeight - 200}
                className={cl.Canvas}
                ref={canvas}
                onMouseDown={toolbar.down}
                onMouseUp={toolbar.up}
                onMouseMove={toolbar.move}
            >
            </canvas>
                <div>
                    {
                        toolbar.names.map(nameEl =>
                            (
                            <Name
                                key={nameEl.name}
                                name={nameEl.name}
                                left={nameEl.x}
                                top={nameEl.y}
                            />)
                        )
                    }
                </div>
            {/* <div className={cl.Name} style={{display: display, top, left}}>{toolbar.name}</div> */}
        </div>

    )
});

export default Test