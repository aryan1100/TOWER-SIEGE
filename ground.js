class ground{
    constructor(x,y){
        var options ={
            isStatic:true,
         density:1.2
        ,
        friction:0.3,
        restitution:0.3
        }
       this.x = x
       this.y = y
       this.body = Bodies.rectangle(x,y,2000,50,options)
       World.add(world,this.body) 
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
         rotate(this.body.angle)
         fill("brown")
         rectMode(CENTER)
         rect(pos.x,pos.y,2000,50)
         pop()


    }
}