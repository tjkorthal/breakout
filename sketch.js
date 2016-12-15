var ball,
    bricks = [],
    debounce = 0,
    paddle,
    score = 0;

const SCALE = 20,
      ROWS = 8,
      COLUMNS = 10;

function setup() {
  let count = 0,
      options = {};
  createCanvas(20*SCALE, 28*SCALE);
  ball = new Ball();
  paddle = new Paddle();
  for( let rows = 0; rows < ROWS; rows++){
    for (let col = 0; col < COLUMNS; col++){
      switch (rows){
        case 0:
        case 1:
          options.color = { r: 255, g: 0, b: 0 }
          options.points = 7;
          break;
        case 2:
        case 3:
          options.color = { r: 255, g: 128, b: 0 }
          options.points = 5;
          break;
        case 4:
        case 5:
          options.color = { r: 0, g: 255, b: 30 }
          options.points = 3;
          break
        default:
          options.color = { r: 255, g: 255, b: 0 }
          options.points = 1;
      }

      options.x = col*2*SCALE,
      options.y = rows*SCALE,
      options.id = count;

      bricks[count] = new Brick(options);
      count++;
    }
  }
}

function draw() {
  background(153);
  paddle.show();
  ball.show();
  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].show();
  }
  paddle.checkCollision();
  ball.checkCollision();
  for (let b = bricks.length - 1; b >= 0; b--) {
    if(bricks[b].checkCollision()){
      if (bricks[b].hits <= 0){
        score += bricks[b].points;
        bricks.splice(b, 1);
      }
      break;
    }
  }
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
  this.height = 5;
  this.width = 60;

  this.move = function(x){
    this.x += x;
    this.x = constrain(this.x, 0, width - this.width);
  }

  this.show = function(){
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }

  this.checkCollision = function(){
    let paddleRight = paddle.x + this.width;
    if(debounce > 0){
      debounce--;
      return;
    }
    if (dist(ball.y, ball.y, this.y, this.y-5) <= this.height &&
      (ball.x >= this.x) && (ball.x <= paddleRight)) {
        ball.ySpeed *= -1;
        debounce = 5;
      }
    }
}
