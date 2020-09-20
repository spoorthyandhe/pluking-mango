class Stone{
    constructor(x, y,radius) {
 
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
       this.radius=radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y,radius, options);

      }
      display(){ 
        push();
        rectMode(CENTER);
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image,50, 660,50,50);
        pop();
      }
}