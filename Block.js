class Block {
  constructor(x, y, width, height){
    var options={
        isStatic:true,
        'friction':1,
        'restitution':0.8,
        'density':1,
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
   // this.body.shapeColor = this.shapeColor;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

display(){
    var angle = this.body.angle;
    var position = this.body.position;

    push();
   translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    fill("lightgreen");
   rect(this.x, this.y, this.width, this.height);
   pop();
  };
}