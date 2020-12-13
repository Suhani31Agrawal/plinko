const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Body=Matter.Body;

var particles=[];
var pegs=[];
var ground;
var divisions=[];
var engine,world;

// var Endstate=0;
// var gameState=Playstate;

var score=0;

function setup() {
  createCanvas(400,600);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(200,590,400,10)

  for(var i=50;i<400; i=i+50){
   divisions.push(new Divisions(i,450,5,300))
  }

  for(var j=20;j<400; j=j+30){
    pegs.push(new Peg(j,150,5))
   }


for(var m=35;m<370; m=m+30){
  pegs.push(new Peg(m,200,5))
 }

 for(var n=20;n<400; n=n+30){
  pegs.push(new Peg(n,50,5))
}

for(var k=35;k<370; k=k+30){
  pegs.push(new Peg(k,100,5))
 }
}



function draw() {
  background(0); 
  Engine.update(engine)
  
  ground.display();


  text("SCORE= ",50,30)
  for(var i=0;i<divisions.length;i=i+1){
    divisions[i].display();
  }

  for(var j=0;j<pegs.length;j=j+1){
    pegs[j].display();
  }

  for(var m=0;m<pegs.length;m=m+1){
    pegs[m].display();
  }

  for(var n=0;n<pegs.length;n=n+1){
    pegs[n].display();
  }

  for(var k=0;k<pegs.length;k=k+1){
    pegs[k].display();
  }
     
     if(particles!=null){
      particles.display()
      if(particles.body.position.y>760){
        if(particles.body.position.x<300){
          score=score+500;
          particles=null;
        }
      }
    }
  }
    


 function mousePressed(){
   if(gameState!=="end"){
     count++;
     particles=new Particles(mouseX,10,10,10)
   }
  }