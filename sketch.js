var bgImg
var jetImg,jet;
var gameState ="start"


function preload(){
 bgImg=loadImage("images/bg.jpg")
 jetImg=loadImage("images/aircraft.png")
}

function setup() {
  createCanvas(500,700);
  jet=createSprite(250, 600, 50, 50);
  jet.addImage("jetImg",jetImg)
  jet.scale=0.3
  jet.visible=false
}

function draw() {
  background(bgImg);  
  drawSprites();

  if (gameState === "start"){

    textSize(50)
    fill("")
    textFont("Fixedsys")
    text("-Mission Surival-",80,100)

    textSize(25)
    fill("white")
    textFont("Fixedsys")
    text("   Mr.Robert ,head of Space Agency",50,200)
    text("    and his team has found a planet",45,230)
    text("    which is good  for human survival.",40,260)
    text("      They want to protect the planet ",35,290)
    text("      from aliens and you have to go ",30,320)
    text("       on your jet and protect the planet.",25,350)
    text("Press 'S' to Start",160,550)

    if(keyDown("S")){
      gameState="play"
    }
  

   }

  if (gameState === "play"){


    jet.visible=true


    if(keyDown(LEFT_ARROW)){
      jet.x=jet.x-2
    }
  
    
    if(keyDown(RIGHT_ARROW)){
      jet.x=jet.x+2
    }

  }



 

}