class Paper {
    constructor(x,y,radius) {
      var options = {  
        restitution:0.5,
          friction:0.5,
          density:0.8
      }
      this.body = Bodies.circle( x, y, radius, options);
      this.image = loadImage("pics/paper.png");
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
       push();
       translate(pos.x,pos.y);
       rotate(angle);
      fill("purple");
      ellipseMode(CENTER);
     //rotate(angle);
     imageMode(CENTER);
     //image(this.image, position.x, position.y, this.width, this.height);
      //circle( 0, 0, this.radius*2);
      ellipse(0,0,20,20);
      pop();
    }
}
  