class Brush {
    constructor() {
        this.color = 'black';
        this.width = 1;
        this.name = null;
    }

    setColor(val) {
        this.color = val;
    }

    setWidth(val) {
        this.width = val;
    }

    setName(val) {
        this.name = val;
    }
    
    /*data: x,y,action,color,width*/
    draw(context, data) {
        //console.log('draw', x, y, action, this.color);
        context.fillStyle = data.color;
        context.strokeStyle = data.color;
        context.lineWidth = data.width;
        //this.context.fillRect(x, y, 2, 2);
        switch (data.action) {
            case 'down':
                context.beginPath();
                context.moveTo(data.x, data.y);
            
                break;
            case 'move':
                context.lineTo(data.x, data.y);
                context.stroke();
                break;
            case 'up':
                context.closePath();
        }
        

        // this.context.beginPath();
        // this.context.moveTo(x, y);
        // this.context.lineTo(x, y);
        // this.context.stroke();
    }
}

export default new Brush();