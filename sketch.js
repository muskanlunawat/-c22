const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var myengine, myworld;
var ball,ground;

function setup(){
    var canvas = createCanvas(400,400);     
    myengine = Engine.create(); //.world
    myworld = myengine.world;

    var ballOptions = {
        restitution:1
    }
    ball=Bodies.circle(200,50,20,ballOptions);
    World.add(myworld,ball);

    console.log(ball);

    var options = {
      isStatic:true  
    }
    ground = Bodies.rectangle(200,390,400,20,options);
    World.add(myworld,ground);
}

function draw(){
    background("cyan");
    Engine.update(myengine);

    fill("white")
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}
