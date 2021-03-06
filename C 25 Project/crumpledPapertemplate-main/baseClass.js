class baseClass{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position; 
        push() 
        translate(pos.x, pos.y); 
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height); 
        ellipse(0,0,this.r, this.r); 
        pop()
      }
}