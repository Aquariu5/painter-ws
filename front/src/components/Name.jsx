import { useState } from "react";
import cl from '../styles/Canvas.module.css';
import { observer } from "mobx-react-lite";
const Name = ({name, top, left}) => {
    // const [name, setName] = useState('');
    // const [display, setDisplay] = useState('none');
    // const [top, setTop] = useState(0);
    // const [left, setLeft] = useState(0);
    let r = Math.random() * (255);
    let g = Math.random() * (255);
    let b = Math.random() * (255);
    console.log('name, top, left', name, top, left);
    return (
        <div className={cl.Name} style={{top, left, color: `rgb(${r},${g},${b})`}}>
            {name}
        </div>
    )
}

export default Name