var iss,spacecraft , bg
var issimg,spacecraftimg1,spacecraftimg2,spacecraftimg3,spacecraftimg4
var dockingcomplete=false 

function preload() {
bg=loadImage("Docking-undocking/spacebg.jpg")
issimg=loadImage("Docking-undocking/iss.png")
spacecraft1=loadImage("Docking-undocking/spacecraft1.png")
spacecraft2=loadImage("Docking-undocking/spacecraft2.png")
spacecraft3=loadImage("Docking-undocking/spacecraft3.png")
spacecraft4=loadImage("Docking-undocking/spacecraft4.png")

  
}


function setup() {
  createCanvas(800,600);
iss =  createSprite(300, 130, 50, 50);
iss.addImage(issimg);
iss.scale=0.9

spacecraft =  createSprite(280, 300, 50, 50);
spacecraft.addImage(spacecraft1);
spacecraft.scale=0.3

  
}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("UP_ARROW")){
   spacecraft.y = spacecraft.y -2;
   
   }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x +2;
    spacecraft.addImage(spacecraft2);
  }

  if(keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x -2;
      spacecraft.addImage(spacecraft3);
  }

  if(keyDown("DOWN_ARROW")){
        
        spacecraft.addImage(spacecraft1);
  }


  if (spacecraft.y<= (iss.y+70)&&spacecraft.x<=(iss.x-10 )) { 
    fill ("white")
    textSize (30 )
text ("DOCKING SUCESSFUL! ",  200,300)
dockingcomplete = true 

  }
if (dockingcomplete===false) { 
   spacecraft.x= spacecraft.x+random (-1,1)
}
      
}



