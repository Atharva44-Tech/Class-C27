class slingShot{
constructor (bodyA,bodyB){

    var options ={
        length:10,
        stiffness:0.04,
        bodyA:bodyA,
        bodyB:bodyB
    };


    this.sling= constrain.create(options)
   World.add(world,this.sling);
}

display(){

    strokeWeight(4);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
}
}