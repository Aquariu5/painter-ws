import {makeAutoObservable} from 'mobx'
import brush from '../components/models/Brush';
class Toolbar {
    toolbar = brush;
    canvas = null;
    context = null;
    toggle = false;
    ws = null;
    ownname = null;
    names = [];
    //wsId = null;
    messages = [];
    // color = 'black';
    // width = 1;
    constructor() {
        console.log('valbrush', brush);
        makeAutoObservable(this);
    }

    setToolbar(val) {
        
        this.toolbar = val;
    }
    
    addName(name) {
        //this.names = [...this.names, {name, x: 0, y: 0}];
        let idx = this.names.findIndex(el => el.name == name);
        if (idx == -1)
            this.names.push({name, x: 0, y: 0});
    }

    addMessage(msg) {
        this.messages.push(msg);
    }

    changePositionByName(name, newX, newY) {
        console.log('thisnames', this.names[0].name);
        this.names.forEach(el => console.log('name', el.name));
        console.log('inputname', name);
        let idx = this.names.findIndex(el => el.name == name);
        if (idx != -1) {
            console.log('idx', idx);
            this.names[idx] = {name, x: newX, y: newY};
        }

        //console.log('updd', this.names);
    }

    setWs(ws) {
        this.ws = ws;
    }

    setCanvas(val) {
        this.canvas = val;
        this.context = this.canvas.getContext('2d');
    }

    down = (e) => {
        this.toggle = true;
        this.context.beginPath();
        this.context.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        this.ws.send(JSON.stringify({
            method: 'paint',
            x: e.pageX - e.target.offsetLeft,
            y: e.pageY - e.target.offsetTop,
            action: 'down',
            name: this.ownname,
            color: this.toolbar.color,
            width: this.toolbar.width
        }));
        
    }

    up = (e) => {
        this.toggle = false;
        this.ws.send(JSON.stringify({
            method: 'paint',
            x: e.pageX - e.target.offsetLeft,
            y: e.pageY - e.target.offsetTop,
            action: 'up',
            name: this.ownname,
            // color: this.color
            color: this.toolbar.color,
            width: this.toolbar.width
        }));
    }

    move = (e) => {
        if (this.toggle) {
            this.context.lineTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
            this.ws.send(JSON.stringify({
                method: 'paint',
                x: e.pageX - e.target.offsetLeft,
                y: e.pageY - e.target.offsetTop,
                action: 'move',
                name: this.ownname,
                // color: this.color
                color: this.toolbar.color,
                width: this.toolbar.width
            }));
            this.context.stroke();
            //toolbar.context.fillRect(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop, 2, 2);
        }
    }

}

export default new Toolbar();