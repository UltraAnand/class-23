class Box{
    constructor(x,y,w,h){
        var startic = {
            isStatic: false, restitution: 1
          }
          this.body = Bodies.rectangle(x,y,w,h,startic)
          this.w=w
          this.h=h
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rect(pos.x,pos.y,this.w,this.h);

    }
}