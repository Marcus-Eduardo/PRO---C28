class Launcher {
    constructor(corpoA,pontoB){
        var options = {
            bodyA: corpoA,
            pointB: pontoB,
            stiffness: 0.02,
            length: 7
        }
        this.Launcher = Constraint.create(options)
        World.add(world,this.Launcher)
        this.bodyA = corpoA
        this.pointB = pontoB
    }
    ligar(){
        this.Launcher.bodyA = this.bodyA;
    }
    voar(){
        this.Launcher.bodyA = null;
    }
    display(){
        if(this.launcher.bodyA){
            var corpoA = this.bodyA.position
            var pontoB = this.pointB;
            push();
            strokeWeight(4);
            line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
            pop();
        }
        
    }
}