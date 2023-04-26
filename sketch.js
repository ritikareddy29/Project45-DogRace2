var player1, player2



function preload() {

}

function setup() {
  canvas = createCanvas(700, 700);
  player1 = createSprite(100, 100, 50, 50);
  
} 

function draw() {
  background("white");
  if(keyDown("UP_ARROW")) {
    player1.y = player1.y - 5
  }

  drawSprites();
}
