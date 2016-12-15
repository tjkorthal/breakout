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
      this.xSpeed = 0;
      this.ySpeed = 0;
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
