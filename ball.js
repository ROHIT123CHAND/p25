class Ball {
    constructor(x,y,r)  {
        var option={
           restitution:0.1,
           density:1.5,
           friction:0.4
        }
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,r/2,option)
   this.radius=r
   //this.image = loadImage("paper.png")
   World.add(world,this.body)
    } 
    display(){
   var pos=this.body.position
   //pos.x=mouseX
   var angle=this.body.angle
   push()
   translate(pos.x,pos.y)
   rotate(angle)
   imageMode(CENTER)
   fill("red")
   image(this.image,0,0,this.radius,this.radius)
   pop()
    }
   }