export default class Player{
    
    constructor(){
        this.X = 0;
        this.Y = 0;
        
        this.size = 100;

        this.color = 'rgb(0,0,0)'

        this.speed = this.size;
    }

    drawPlayer(context){
        context.fillStyle = this.color;
        context.fillRect(this.X, this.Y, this.size, this.size);
    }

    moveLeft(){
        this.X -= this.speed;
    }

    moveRight(){
        this.X += this.speed;
    }

    moveUp(){
        this.Y -= this.speed;
    }

    moveDown(){
        this.Y += this.speed;
    }

    update(){
        this.speed = this.size;
    }

}

