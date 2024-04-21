var edges 

var player
var playerImg
var playerImg2
var player_shoot
var player_shoot2
var playerRight
var playerLeft
var playerState = 0
var playerJump1
var playerJump2
var playerSide = 1

var chao
var chaoImg

var forestImg

var boss

var shoot
var shootState = 0
var shootGroup
var shootImg
var shootImg2

function preload(){
playerImg = loadAnimation("cavaleiroParadoOr.png")
playerImg2 = loadAnimation("cavaleiroParado2.png")
player_shoot = loadAnimation("cavaleiro_atirando.png")
player_shoot2 = loadAnimation("cavaleiro_atirando2.png")
playerRight = loadAnimation("cavaleiroFake1.png","cavaleiroFake2.png","cavaleiroFake3.png","cavaleiroFake4.png")
playerLeft = loadAnimation("cavaleiroFake1L.png","cavaleiroFake2L.png","cavaleiroFake3L.png","cavaleiroFake4L.png")
playerJump1 = loadAnimation("cavaleiroPulando.png")
playerJump2 = loadAnimation("cavaleiroPulando2.png")

shootImg = loadAnimation("agua.png")
shootImg2 = loadAnimation("agua2.png")

forestImg = loadImage("floresta.jpg")

playerRight.playing = true
playerLeft.playing = true

}


function setup(){
createCanvas(1366,651)

edges = createEdgeSprites()

chao = createSprite(650,630,1500,50)


prota()
chefe()


shootGroup = new Group()


}


function draw(){
background(forestImg)

movement()

player.collide(chao)

drawSprites()
}

function prota(){
 player = createSprite(200,600,30,30)
 player.addAnimation("parado",playerImg)
 player.addAnimation("parado2",playerImg2)
 player.addAnimation("atirando",player_shoot)
 player.addAnimation("atirando2",player_shoot2)
 player.addAnimation("direita",playerRight)
 player.addAnimation("esquerda",playerLeft)
 player.addAnimation("jumping",playerJump1)
 player.addAnimation("jumping2",playerJump2)
 player.scale = 0.5
 player.debug = false

 

}

function movement(){

  if(keyDown(UP_ARROW) && player.y > 547){
    player.velocityY = -20


   }
   if(keyDown(RIGHT_ARROW) && player.x<1352 ){
    player.x = player.x +12
    playerSide = 1
    if(player.y>545){
    player.changeAnimation("direita",playerRight)
  }
  }

  
   if(keyDown(LEFT_ARROW)&& player.x>14){
    player.x = player.x -12
    playerSide = 2
    if(player.y>545){
      player.changeAnimation("esquerda",playerLeft)
    }

   }

   if(keyDown(32)){
    tiro()

   }

   if(player.y < 549.25){
  player.velocityY = player.velocityY + 1
   }

   if(shootState === 0 && !keyDown(RIGHT_ARROW) && !keyDown(LEFT_ARROW) && player.y > 547 && playerSide === 1){
    player.changeAnimation("parado",playerImg)
   }

   if(shootState === 0 && !keyDown(RIGHT_ARROW) && !keyDown(LEFT_ARROW) && player.y > 547 && playerSide === 2){
    player.changeAnimation("parado2",playerImg2)
   }

    if(player.y<545 && playerSide ===1 && shootState === 0){
      player.changeAnimation("jumping",playerJump1)
    }
    if(player.y<545 && playerSide ===2 && shootState === 0){
      player.changeAnimation("jumping2",playerJump2)
    }

}

function chefe(){
boss = createSprite(1100,540,90,130)
}

function tiro(){
  if(shootState == 0 && playerSide == 1){
  shoot = createSprite(player.x,player.y,10,10);
  shoot.addAnimation("agua1",shootImg)
  shoot.changeAnimation("agua1",shootImg)
  shoot.scale = 0.1
  shoot.velocityX = 45
  shootGroup.add(shoot)
  shootState = 1

  player.changeAnimation("atirando",player_shoot)
  
  setTimeout(()=>{
    shootState = 0
    
  },1000)
}

  if(shootState == 0 && playerSide == 2){
    shoot = createSprite(player.x,player.y,10,10);
    shoot.addAnimation("agua2",shootImg2)
    shoot.changeAnimation("agua2",shootImg2)
    shoot.scale = 0.1
    shoot.velocityX = -45
    shootGroup.add(shoot)
    shootState = 1
  
    player.changeAnimation("atirando2",player_shoot2)
   

    setTimeout(()=>{
      shootState = 0
      
    },1000)
  }
}
