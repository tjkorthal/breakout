var ball;
var paddle;

function setup() {
  createCanvas(400, 550);
  ball = new Ball();
  paddle = new Paddle();
}

function draw() {
  background(153);
  paddle.show();
  ball.show();
  ball.checkCollision();
  ball.move();

  if (keyIsDown(LEFT_ARROW)){
    paddle.move(-5);
  } else if (keyIsDown(RIGHT_ARROW)){
    paddle.move(5);
  }
}

function Ball(){
  fill(255);
  this.x = width/2;
  this.xSpeed = 3;
  this.y = 500;
  this.ySpeed = 2;

  this.checkCollision = function(){
    var paddleRight = paddle.x+30;
    if ( dist(this.y, this.y, paddle.y, paddle.y-5) < 6 && (this.x >= paddle.x) && (this.x <= paddleRight)) { //paddle collision
      console.log("Paddle collision!");
      this.ySpeed *= -1;
    } else if (this.x === 0){
      console.log("Left wall collision!");
      this.xSpeed *= -1;
    } else if (this.x === 400-5){
      console.log("Right wall collision!");
      this.xSpeed *= -1;
    } else if (this.y === 0){
      console.log("Ceiling collision!");
      this.ySpeed *= -1;
    } else if (this.y === 550-5){
      console.log("Floor collision!");
      this.ySpeed *= -1;
    }
  }

  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.x = constrain(this.x, 0, width - 5);
    this.y = constrain(this.y, 0, height - 5);
  }

  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,5,5);
  }
}

function Brick(){
  this.hits = 1;
  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = -5;

}

// function keyPressed(){
//   if (keyCode === LEFT_ARROW){
//     paddle.move(-20);
//   } else if (keyCode == RIGHT_ARROW){
//     paddle.move(20);
//   }
// }

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
