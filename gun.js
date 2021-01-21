class gun{
    constructor(x,y){
     var options={
         isStatic :false
     }
     this.x = x
     this.y = y
     this.body = Bodies.rectangle(x,y,40,40)
     this.image = loadImage("polygon.png")
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        pop()
    }
}