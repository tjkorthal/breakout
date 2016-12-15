var ball,
    count = 0,
    paddle,
    bricks = [];

function setup() {
  createCanvas(400, 550);
  ball = new Ball();
  paddle = new Paddle();
  for( var rows = 0; rows < 5; rows++){
    for (var col = 0; col < 10; col++) {
      bricks[count] = new Brick(col*40,rows*20);
      count++;
    }
  }
}

function draw() {
  background(153);
  paddle.show();
  ball.show();
  for (var i = bricks.length - 1; i >= 0; i--) {
    bricks[i].show();
  }
  ball.checkCollision();
  bricks[bricks.length -1].checkCollision();
  ball.move();

  if (keyIsDown(LEFT_ARROW)){
    paddle.move(-5);
  } else if (keyIsDown(RIGHT_ARROW)){
    paddle.move(5);
  }
}

function Paddle(){
  this.x = width/2;
  this.y = 525;

  this.move = function(x){
    this.x += x;
    this.x = constrain(this.x, 0, width - 30);
  }

  this.show = function(){
    fill(255);
    rect(this.x,this.y,30,5);
  }
}
