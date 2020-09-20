class Mango{
    constructor(x, y,radius) {
      var options = {
        isStatic:true,
        'restitution':0,
        'friction':1,
      
    }
        this.x=x;
        this.y=y;
      this.radius=radius;
        this.body = Bodies.circle(x, y,radius,options);
        World.add(world, this.body);
        this.image = loadImage("mango.png");
      }

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
      imageMode(CENTER);
       image(this.image,0, 0,50,50);
        pop();
      }
}