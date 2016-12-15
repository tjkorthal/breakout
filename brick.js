function Brick(opts){
  this.color = opts.color || { r: 0, g: 255, b: 30 };
  this.height = opts.height || 1 * SCALE;
  this.hits = opts.hits || 1;
  this.id = opts.id || 0;
  this.points = opts.points || 1;
  this.width = opts.width || 2 * SCALE;
  this.x = opts.x || 0;
  this.y = opts.y || 0;

  this.checkCollision = function(){
    let touchingBrick = false;
    // FIXME: Glitches out when ball is redirected into another block
    // need to prioritize side it's closest to

    // left-right
    if (((ball.y >= this.y) && (ball.y <= this.y + this.height)) &&
      ((ball.x === this.x +this.width) || (ball.x === this.x))){
      ball.xSpeed *= -1;
      touchingBrick = true;
    }
    // top-bottom
    else if (((ball.x >= this.x) && (ball.x <= this.x + this.width)) &&
      ((ball.y === this.y +this.height) || (ball.y === this.y)) ){
      ball.ySpeed *= -1;
      touchingBrick = true;
    }
    if(touchingBrick){
      this.hits--;
    }
    return touchingBrick;
  }

  this.show = function(){
    let c = this.color;
    fill(c.r, c.g, c.b);
    rect(this.x,this.y,this.width,this.height);
  }

}
