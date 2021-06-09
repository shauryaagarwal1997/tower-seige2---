class Rope{
    constructor(bodyA,pointB){
        var options={
        bodyA : bodyA,
        pointB : pointB,
        
        stiffness:0.5,
        length:50
        }
        this.constraint=Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }
    fly(){
        this.constraint.bodyA=null;
    }
    display(){
        if(this.constraint.bodyA != null){
            line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.pointB.x,this.constraint.pointB.y)
        }
    }
    attach(){
        Matter.Body.setPosition(polygon,{x:120,y:510});
        this.constraint.bodyA=polygon;
    }
}