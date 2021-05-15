class Drops {

    constructor(x,y){
       var options= {
           restitution:0.1,
           friction:0.01
       }
       this.drop=Bodies.circle(x,y,3,options);
       World.add(world, this.drop);
       this.radius=3;
    }

    display(){
       ellipseMode(RADIUS);
       fill("blue")
       ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius)

    }

    update(){
       if(this.drop.position.y>height){
           Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
       }
    }
}