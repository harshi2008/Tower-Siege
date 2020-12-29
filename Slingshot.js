class Slingshot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.03,  
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    
    push();
    strokeWeight(3);
    stroke("black");   
    pop();
        }
    }
}