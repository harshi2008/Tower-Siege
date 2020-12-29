const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground1, ground2;
var slingshot;

function preload(){
polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1280, 578);
    engine = Engine.create();
    world = engine.world;

    //grounds/bases of the pyramids
    ground1 = new Ground(600, 315, 270, 15);
    ground2 = new Ground(1050, 180, 280, 15);
    ground3 = new Ground(1019, 490, 290, 15);
    //main base/ground
    ground4 = new Ground(640, 560, 1280, 20);

    //1st level of pyramid of ground3
    block1 = new Block(466, 230, 30, 45);
    //rgb(246, 120, 255);   
    block2 = new Block(481, 230, 30, 45);
    block3 = new Block(496, 230, 30, 45);   
    block4 = new Block(511, 230, 30, 45);
    block5 = new Block(526, 230, 30, 45);   
    block6 = new Block(541, 230, 30, 45);   
    block7 = new Block(556, 230, 30, 45);
    
    //2nd level of pyramid of ground3
    block8 = new Block(474, 207, 30, 45);
    block9 = new Block(489, 207, 30, 45);
    block10 = new Block(504, 207, 30, 45);
    block11 = new Block(519, 207, 30, 45);
    block12 = new Block(534, 207, 30, 45);
    block13 = new Block(549, 207, 30, 45);

    //3rd level of pyramid of ground3
    block14 = new Block(482, 184, 30, 45);
    block15 = new Block(497, 184, 30, 45);
    block16 = new Block(512, 184, 30, 45);
    block17 = new Block(527, 184, 30, 45);
    block18 = new Block(542, 184, 30, 45);

    //4th level of pyramid of ground3
    block19 = new Block(490, 161, 30, 45);
    block20 = new Block(505, 161, 30, 45);
    block21 = new Block(520, 161, 30, 45);    
    block22 = new Block(535, 161, 30, 45)

    //1st level of pyramid of ground1
    block23 = new Block(261, 142, 30, 45);
    block24 = new Block(276, 142, 30, 45);
    block25 = new Block(291, 142, 30, 45);
    block26 = new Block(306, 142, 30, 45);
    block27 = new Block(321, 142, 30, 45);
    block28 = new Block(336, 142, 30, 45);

    //2nd level of pyramid of ground1
    block29 = new Block(269, 119, 30, 45);
    block30 = new Block(284, 119, 30, 45);
    block31 = new Block(299, 119, 30, 45);
    block32 = new Block(314, 119, 30, 45);
    block33 = new Block(329, 119, 30, 45);

    //3rd level of pyramid of ground1
    block34 = new Block(277, 96, 30, 45);
    block35 = new Block(292, 96, 30, 45);
    block36 = new Block(307, 96, 30, 45);
    block37 = new Block(322, 96, 30, 45);

    //4th level of pyramid of ground1
    block38 = new Block(285, 73, 30, 45);
    block39 = new Block(300, 73, 30, 45);
    block40 = new Block(315, 73, 30, 45);

    //5th level of pyramid of ground1 
    block41 = new Block(293, 50, 30, 45);
    block42 = new Block(308, 50, 30, 45);

    //6th level of pyramid of ground1
    block43 = new Block(301, 27, 30, 45);

    //1st level of pyramid of ground2
    block44 = new Block(485, 74.5, 30, 45);
    block45 = new Block(500, 74.5, 30, 45); 
    block46 = new Block(515, 74.5, 30, 45);
    block47 = new Block(530, 74.5, 30, 45);
    block48 = new Block(545, 74.5, 30, 45);
    block49 = new Block(560, 74.5, 30, 45);

    //2nd level of pyramid of ground2
    block50 = new Block(493, 51.5, 30, 45);
    block51 = new Block(508, 51.5, 30, 45);
    block52 = new Block(523, 51.5, 30, 45);
    block53 = new Block(536, 51.5, 30, 45);
    block54 = new Block(551, 51.5, 30, 45);

    //3rd level of pyramid of ground2
    block55 = new Block(501, 28.5, 30, 45);
    block56 = new Block(516, 28.5, 30, 45);
    block57 = new Block(531, 28.5, 30, 45);
    block58 = new Block(546, 28.5, 30, 45);
    block59 = new Block(501, 28.5, 30, 45);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);   

    slingshot = new Slingshot(this.polygon, {x:500, y:600});
}

function draw(){
    background("red");
    rectMode(CENTER);
    
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display(); 
    block38.display(); 
    block39.display(); 
    block40.display(); 
    block41.display(); 
    block42.display(); 
    block43.display(); 
    block44.display(); 
    block45.display(); 
    block46.display(); 
    block47.display(); 
    block48.display(); 
    block49.display();
    block50.display(); 
    block51.display(); 
    block52.display(); 
    block53.display(); 
    block54.display(); 
    block55.display(); 
    block56.display(); 
    block57.display(); 
    block58.display(); 

    slingshot.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}