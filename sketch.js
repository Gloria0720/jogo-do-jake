var trilhaImg, JakeImg, Jake;
var Jake_colidiu, paredeinv1, paredeinv2;

function preload(){
  //imagens pré-carregadas
  trilhaImg = loadImage("path.png");
  JakeImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
}


function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
  trilha = createSprite(200,200);
  trilha.addImage(trilhaImg);
  trilha.velocityY = 4;
  trilha.scale = 1.2;

  Jake = createSprite(200,250);
  Jake.addAnimation("running", JakeImg);
  JakeImg.velocityY = 3;
  JakeImg.scale = 1.2;
  
  paredeinv1 = createSprite(400, 200, 100, 400);
  paredeinv2 = createSprite(0,200, 100, 400);
  paredeinv1.visible = false;
  paredeinv2.visible = false;
}
function draw() {
  background(0);
  
  createEdgeSprites();
  
  
  Jake.x = mouseX;
  Jake.collide(paredeinv1);
  Jake.collide(paredeinv2);
  
  
  
  //para resetar o fundo
  if(trilha.y > 400){
    trilha.y = height/2;
    
  
  }
  
  drawSprites();
    
}
