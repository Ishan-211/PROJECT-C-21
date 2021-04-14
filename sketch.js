var canvas;
var music;
var box1,box2,box3,box4
var ball
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(100,580,180,25);
box2=createSprite(300,580,180,25);
box3=createSprite(500,580,180,25);
box4=createSprite(700,580,180,25);
ball=createSprite(random(20,750),100,40,40)
box1.shapeColor= "blue";
box2.shapeColor= "orange";
box3.shapeColor= "red";
 box4.shapeColor= "green";
 ball.velocityX=5
 ball.velocityY=20
 edges=createEdgeSprites();
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
ball.bounceOff(edges[1]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[0]);
if(box1.isTouching(ball)&&ball.bounceOff(box1)){
    ball.shapeColor="blue";
    music.play();
}
if(box2.isTouching(ball)&&ball.bounceOff(box2)){
    ball.shapeColor="orange";
    music.play();
}
if(box3.isTouching(ball)&&ball.bounceOff(box3)){
    ball.shapeColor="red";
    music.play();
}
if(box4.isTouching(ball)&&ball.bounceOff(box4)){
    ball.shapeColor="green";
    music.play();
}

drawSprites();
    //add condition to check if box touching surface and make it box
}
