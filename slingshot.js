class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:0.04
        };
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.pointB=pointB;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
            strokeWeight(4);
            stroke("red");
            line (pointA.x, pointA.y, pointB.x, pointB.y);
            pop ();
        }
        
    }
    Fly(){
        this.sling.bodyA=null;
    }
}