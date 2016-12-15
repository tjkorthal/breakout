function Brick(x,y){
  this.hits = 1;
  this.x = x || 0;
  this.y = y || 0;

  this.checkCollision = function(){
    // TODO: see if ball collides with a side
    // if it hits a side, bounce off and take away a hit point
    if (ball.y === this.y +20){
      console.log("Brick collision!");
      ball.ySpeed *= -1;
    }
  }

  this.show = function(){
    fill(0,255, 30);
    rect(this.x,this.y,40,20);
  }

}
