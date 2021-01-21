class box{
     constructor(x,y){
         var options ={
             isStatic:false,
             restitution:0.05,
             friction:0.3
         }
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x,y,20,30,options)
        this.Visiblity = 255
        World.add(world,this.body)
     }
    display(){
        var pos = this.body.position
          if(this.body.speed < 5){
              push()
              translate(pos.x,pos.y)
            rect(pos.x,pos.y,20,30)
        pop()   
        }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             rect(pos.x, pos.y, 20, 30);
             pop();
           }
           
         }
        

    
}