import Player from './player.mjs';
import InputHandler from './InputHandler.mjs';

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var player = new Player();
player.size = 20;

player.X = canvas.clientWidth / 2 - player.size / 2;
player.Y = canvas.clientHeight / 2 - player.size / 2;
player.drawPlayer(context);

new InputHandler(player);



function gameLoop(){
    //context.clearRect(0,0, 800, 600);
    player.update();
    player.drawPlayer(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();