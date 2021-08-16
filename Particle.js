function Particle (x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 200;
  this.hu = hu;
  
  if (firework) {
    this.vel = createVector(0, random(-5, -18));   
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 8));
  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.acc = createVector(0, 0);
  
  this.update = function () {
    if (!this.firework) {
      this.vel.mult(random(0.9, 1));
      this.lifespan -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
  }
  
  this.done = function() {
    if (this.lifespan < 0) {
       return true;    
    } else {
      return false;    
    }
  
  }
  this.show = function () {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(random(5, 5));
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(random(5, 10));
      stroke(hu, 255);
    }
    
    point(this.pos.x, this.pos.y);
  
  }

}
