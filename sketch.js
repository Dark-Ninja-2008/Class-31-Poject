
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var division1,division2,division3,division4,division5
var plinko1,plinko2,plinko3,plink4,plinko5,plinko6,plink07,plinko8,plinko9,plink10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20,plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30
var particles
var plinko31,plinko32,plinko33,plinko34,plinko35,plinko36,plinko37,plinko38,plinko39,plinko40,plinko41,plinko42,plinko43,plinko44,plinko45
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(240,800,480,20);
	division1 = new Division(75,700,2,180);
	division2 = new Division(150,700,2,180);
	division3 = new Division(225,700,2,180);
	division4 = new Division(300,700,2,180);
	division5 = new Division(375,700,2,180);

	plinko1 = new Plinko (40,100,10);
	plinko2 = new Plinko (90,100,10);
	plinko3 = new Plinko (140,100,10);
	plinko4 = new Plinko (190,100,10);	
	plinko5 = new Plinko (240,100,10);
	plinko6 = new Plinko (290,100,10);
	plinko7 = new Plinko (340,100,10);
	plinko8 = new Plinko (390,100,10);

	plinko9 = new Plinko (65,175,10);
	plinko10 = new Plinko (112,175,10);
	plinko11= new Plinko (162,175,10);
	plinko12= new Plinko (210,175,10);
	plinko13= new Plinko (260,175,10);
    plinko14= new Plinko (310,175,10);
	plinko15= new Plinko (360,175,10);

	plinko16= new Plinko (40,250,10);
	plinko17= new Plinko (90,250,10);
	plinko18= new Plinko (140,250,10);
	plinko19= new Plinko (190,250,10);
	plinko20= new Plinko (240,250,10);
	plinko21= new Plinko (290,250,10);
	plinko22= new Plinko (340,250,10);
	plinko23= new Plinko (390,250,10);

    plinko24 = new Plinko (65,325,10);
	plinko25 = new Plinko (112,325,10);
	plinko26= new Plinko (162,325,10);
	plinko27= new Plinko (210,325,10);
	plinko28= new Plinko (260,325,10);
    plinko29= new Plinko (310,325,10);
	plinko30= new Plinko (360,325,10);

	plinko31= new Plinko (40,400,10);
	plinko32= new Plinko (90,400,10);
	plinko33= new Plinko (140,400,10);
	plinko34= new Plinko (190,400,10);
	plinko35= new Plinko (240,400,10);
	plinko36= new Plinko (290,400,10);
	plinko37= new Plinko (340,400,10);
	plinko38= new Plinko (390,400,10);

	plinko39 = new Plinko (65,475,10);
	plinko40= new Plinko (112,475,10);
	plinko41= new Plinko (162,475,10);
	plinko42= new Plinko (210,475,10);
	plinko43= new Plinko (260,475,10);
    plinko44= new Plinko (310,475,10);
	plinko45= new Plinko (360,475,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();

  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();

  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();

  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();

  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();


  }
