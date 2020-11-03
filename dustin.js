class Dustbin {
    constructor(x,y,height,angle)  {
        var option={
           isStatic:true                                               
        }
   this.image=loadImage("dustbingreen.png");
   this.body=Bodies.rectangle(x,y,20,height,option)
   this.width=20
   this.height=height
   Matter.Body.setAngle(this.body,angle)
   World.add(world,this.body)
    } 
    display(){
   var pos=this.body.position
   var angle=this.body.angle
   push()
   translate(pos.x,pos.y)
   rotate(angle)
   imageMode(CENTER)
   fill("pink")
   image(this.image,0,140,200,150)
   pop()
    }
   }