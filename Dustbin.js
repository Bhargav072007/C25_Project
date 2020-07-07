class Dustbin{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 150, 150, options);
      this.image = loadImage("pics/dustbingreen.png");
      
      
      this.width = 150;
      this.height = 150;
      this.image = loadImage("pics/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var position = this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rect(position.x,position.y,150,150)
      //rect(650,630,200,20);
      //rect(550,590,25,100);
      //rect(750,590,25,100);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, position.x, position.y, this.width, this.height);
      pop();
    }
}