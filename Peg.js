class Peg {
    constructor(x,y,r) {
      var options = {
        isStatic:true,
        restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill("grey");
      ellipse(0, 0, this.r*2, this.r*2);
      pop();
    }
  };