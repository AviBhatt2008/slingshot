class Slingshot
{
    constructor(bodyA, point)
    {
        var options =
        {
            bodyA: bodyA,
            pointB: point,
            length: 10,
            stiffness: 0.05
        }
        this.sling = Matter.Constraint.create(options);
        this.pointB = point;
        World.add(world, this.sling);
    }
    fly()
    {
        this.sling.bodyA = null;
    }
    display()
    {   
        if(this.sling.bodyA)
        {
            strokeWeight(3);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, 
            this.pointB.x, this.pointB.y);
        }
    }
}
