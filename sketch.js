const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var database;
var gameState;
var playerCount, form, player, game;
var allPlayers;
var player1, player2;
var players;
var p1, p2;
var sideWallLeft, sideWallRight;
var ground1, ground2;
var platform1, platform2;

function preload(){
    //load images for p1 and p2
    //p1 = loadImage("");
    //p2 = loadImage("");
}

function setup(){
    createCanvas(1440, 3600);
    engine = Engine.create();
    world = engine.world;

    player1 = new PlayerBody(100, 3573);
    player2 = new PlayerBody(200, 3573);

    sideWallLeft = new Ground(10, 1800, 20, 3600);
    sideWallRight = new Ground(1430, 1800, 20, 3600);

    ground1 = new Ground(720,3590,1440,20);
    ground2 = new Ground(600, 3360, 1200, 20);

    platform1 = new Ground(1355, 3520, 130, 130);

}


function draw(){
    background(255);
    /*player2.y = mouseY;
    console.log(displayWidth);
    player1.collide(sideWallLeft);
    player1.collide(sideWallRight);
    player2.collide(sideWallLeft);
    player2.collide(sideWallRight);
    player1.collide(ground1);
    player2.collide(ground1);
    player1.collide(ground2);
    player2.collide(ground2);
    player1.collide(platform1);
    player2.collide(platform1);*/

    /*if(player1.y === 3565 && player2.y === 3565){
        gameState = 1;
    }
    if(player1.y === 3330 && player2.y === 3330){
        gameState = 2;
    }*/

    if(gameState == 1){
        /*if(player1.y === 3565){
            if(keyIsDown(UP_ARROW)){
                player1 = -12;
            }
            if(keyIsDown(RIGHT_ARROW)){
                player1.x = player1.x+24;
            }
            if(keyIsDown(LEFT_ARROW)){
                player1.x = player1.x-24;
            }
            if(keyIsDown(UP_ARROW && RIGHT_ARROW)){
                player1.velocityY = player1.velocityY-2;
                player1.x = player1.x+60;
            }
            if(keyIsDown(UP_ARROW && LEFT_ARROW)){
                player1.velocityY = player1.velocityY-2;
                player1.x = player1.x-60;
            }
        }

        if(player2.y === 3565){
            if(keyDown("W")){
                player2.velocityY = -12;
            }
            if(keyDown("D")){
                player2.x = player2.x+24;
            }
            if(keyDown("A")){
                player2.x = player2.x-24;
            }
            if(keyDown("W" && "D")){
                player2.velocityY = player2.velocityY-2;
                player2.x = player2.x+60;
            }
            if(keyDown("W" && "A")){
                player2.velocityY = player2.velocityY-2;
                player2.x = player2.x-60;
            }
        }

        if(player1.y < 3573){
            player1.velocityY = player1.velocityY + 0.8;
        }
        if(player2.y < 3573){
            player2.velocityY = player2.velocityY + 0.8;
        }*/

    }

    else if(gameState == 2){

    }

    textSize(15);
    text("For player 1, use arrow keys", 70, 70);
    text("For player 2, use 'A,W,D' ", 70, 100);

    player1.display();
    player2.display();

    sideWallLeft.display();
    sideWallRight.display();

    ground1.display();
    ground2.display();

    platform1.display();

    drawSprites();
} 

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(player1.body, player1.body.position, {x: 0, y: -65});
    }
}

