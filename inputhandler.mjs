export default class InputHandler {
    constructor(player){
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode){
                case 37:
                    player.moveLeft();
                    player.color = randomColor();
                    break;
                
                case 38:
                    player.moveUp();
                    player.color = randomColor();
                    break;

                case 39:
                    player.moveRight();
                    player.color = randomColor();
                    break;

                case 40:
                    player.moveDown();
                    player.color = randomColor();
                    break;
            }
        });
    }
}

function randomColor(){
    let r, g, b;
    r = (Math.random() * 255)
    g = (Math.random() * 255)
    b = (Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`;
}
