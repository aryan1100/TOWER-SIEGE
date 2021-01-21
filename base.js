class base{
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
       this.width = width
       this.height = height
       this.body = Bodies.rectangle(x,y,260,15,options)
       World.add(world,this.body)
    }
   display(){
         var pos = this.body.position
        push()
         translate(pos.x,pos.y)
         rotate(this.body.angle)
         fill("red")
         rect(pos.x,pos.y,150,15)
         pop()



   }
}