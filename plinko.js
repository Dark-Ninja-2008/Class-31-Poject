class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            'density':2
        }

        this.body= Bodies.circle(x,y,radius,options);
        this.radius = 10;
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius,this.radius);
        pop();
      }
}
    
