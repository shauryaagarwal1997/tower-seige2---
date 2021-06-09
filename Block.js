class Block{
  constructor(x, y, width, height){
    var options={
      isStatic:false
    }
    this.width=width;
    this.height=height;

    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
    this.image=loadImage("sprites/box.jpg");
    this.Visibility=255
  }
  display(){
    
    if(this.body.speed>3){
      this.Visibility=this.Visibility-30;
      World.remove(world,this.body);
      push();
      translate(this.body.position.x,this.body.position.y);
      tint(255,this.Visibility);
      image(this.image,0,0,this.width,this.height)
      rotate(this.body.angle);
      pop();
    } else{
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
    
  }

}
