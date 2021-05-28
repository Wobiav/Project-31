class Divisions {
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y, 20, h, options);
        this.w = 20;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}