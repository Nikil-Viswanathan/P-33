const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var ground;
var engine,world;
var score = 0;
var gameState = "play";
var division = [];
var plinkos = [];
var particles = [];
var particle;
var count = 0



function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(240 , 780 , 480 , 20);
  //plinko1 = new Plinko(20,300,10);
  for(var i = 10 ; i < 480 ; i = i + 50){
division.push(new Division(i , 700 , 5 , 200))

  }
 for  (var j = 40; j  <=width ; j = j+50) 
{
     plinkos.push(new Plinko(j,75 , 10));
}
for  (var j = 15;  j <=width-10; j=j+50) 
{

       plinkos.push(new Plinko(j,175 , 10));
}
for  (var j = 40; j  <=width ; j = j+50) 
{
     plinkos.push(new Plinko(j,275 , 10));
}
for  (var j = 15;  j <=width-10; j=j+50) 
{

       plinkos.push(new Plinko(j,375 , 10));

}
}

function draw() {
  background("black");
  Engine.update(engine)

  ground.display();
  if(gameState == "end"){
    textSize(30);
    text("Gameover" , 200 , 400);
  }   
 
  text("Score: "+score , 30,20);
  textSize(20)
  text("500" , 20,605);
  textSize(20)
  text("500" , 70,605);
  textSize(20)
  text("500" , 120,605);
  textSize(20)
  text("500" , 170,605);
  textSize(20)
  text("100" , 220,605);
  textSize(20)
  text("100" , 270,605);
  textSize(20)
  text("200" , 320,605);
  textSize(20)
  text("200" , 370,605);
  textSize(20)
  text("200" , 420,605);
for(var i = 0 ; i < division.length ; i++){
  division[i].display();
}
  for  (var j = 0; j < plinkos.length ; j++){
    plinkos[j].display();
  } 
  console.log(count)
  if(particle!=null){
    particle.display();

    if (particle.body.position.y>760){
      if(particle.body.position.x < 210)
      {
        score=score+500;
        particle=null;
        if(count>= 5) gameState = "end";
      }
      else if(particle.body.position.x > 210 && particle.body.position.x < 300){
        score=score+100;
        particle=null;
        if(count>= 5) gameState = "end";
      }
      else if(particle.body.position.x > 300 && particle.body.position.x < 455){
        score=score+200;
        particle=null;
        if(count >= 5) gameState = "end";
      }
    }
    
    }
   
  
  drawSprites();
 
  }
function keyPressed(){
  if(keyCode == 32){

  
  if(gameState!== "end"){
count++;
particle = new Particle(mouseX , 30 , 10 , 10);
console.log(count);
  }
}
}