const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,
b21,b22,b23,b24,b25,b26,b27,b28,b29,b30;

var base1,base2,groundS

var bomb,string,backgroundImg

function preload(){
  getBackgroundImg()
}
function setup(){

    engine = Engine.create();
    world = engine.world;
canvas =  createCanvas(1200,1200)
bomb = new gun(1000,400)


b1 = new box(300/2,400/2)
b2 = new box(320/2,400/2)
b3 = new box(340/2,400/2)
b4 = new box(360/2,400/2)
b5 = new box(380/2,400/2)
b6 = new box(310/2,370/2)
b7 = new box(330/2,370/2)
b8 = new box(350/2,370/2)
b9 = new box(370/2,370/2)
b10 = new box(320/2,330/2)
b11 = new box(340/2,330/2)
b12 = new box(360/2,330/2)
b13 = new box(330/2,300/2)
b14 = new box(350/2,300/2)
b15 = new box(340/2,270/2)

base1 = new base(280/2,450/2)
b16 = new box(600/2,300/2)
b17= new box(620/2,300/2)
b18 = new box(640/2,300/2)
b19 = new box(660/2,300/2)
b20 = new box(680/2,300/2)
b21 = new box(610/2,270/2)
b22 = new box(630/2,270/2)
b23 = new box(650/2,270/2)
b24 = new box(670/2,270/2)
b25 = new box(620/2,240/2)

b26 = new box(640/2,240/2)
b27 = new box(660/2,240/2)
b28 = new box(630/2,210/2)
b29 = new box(650/2,210/2)
b30 = new box(640/2,180/2)

base2 = new base(580/2,350/2)

string = new chain(bomb.body,{x:1000/2,y:400/2})

groundS= new ground(width/4,600/2)

}

function draw(){
  background(backgroundImg)
    Engine.update(engine);
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
b24.display();
b25.display();
b26.display();
b27.display();
b28.display();
b29.display();
b30.display();
base1.display();
base2.display();
bomb.display();
string.display();
groundS.display()
}

function mouseDragged(){
  Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}

function keyPressed(){
  if(keyCode === 32){
   
      string.attach(bomb.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg2.jpg";
  }
  else{
      bg = "sprites/bg1.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  console.log(datetime);
}