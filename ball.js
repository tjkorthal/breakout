function Ball(){
  fill(255);
  this.x = width/2;
  this.xSpeed = 3;
  this.y = 500;
  this.ySpeed = 5;
  this.radius = 5;

  this.checkCollision = function(){
    if (this.x === 0){                            // Left wall
      this.xSpeed *= -1;
    } else if (this.x === (20*SCALE)-this.radius){  // Right wall
      this.xSpeed *= -1;
    } else if (this.y === 0){                     // Ceiling
      this.ySpeed *= -1;
    } else if (this.y === (28*SCALE)-this.radius){  // Floor
      this.xSpeed = 0;
      this.ySpeed = 0;
      console.log("Score: " + score);
    }
  }

  this.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.x = constrain(this.x, 0, width - this.radius);
    this.y = constrain(this.y, 0, height - this.radius);
  }

  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,this.radius * 2,this.radius * 2);
  }
}
