const VARIETY = 0.6;

class ParticleC {
  constructor(direction, frames, x, y, col) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.fromAngle(direction);
    this.vel.mult(random(1, 30));
    this.acc = createVector(0, 0.06);
    this.radius = 4;
    this.col = col;
    this.alpha = 255;
    this.angle = random(TWO_PI);
    this.frames = frames;
    this.coords = [];
    for (let i = 0; i < 4; i++) {
      this.coords.push(
        createVector(
          random(-VARIETY, VARIETY) + 1,
          random(-VARIETY, VARIETY) + 1
        )
      );
    }
  }

  run() {
    this.update();
    this.render();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.97);
    this.pos.add(this.vel);
    this.alpha -= 255 / this.frames;
    this.angle += 0.1;
  }

  render() {
    const w = this.radius * sin(this.angle);
    const h = this.radius * cos(this.angle);
    noStroke();
    fill(random(255), random(255), random(255), this.alpha);
    //ellipse(this.pos.x, this.pos.y, w, h);
    beginShape();
    vertex(
      this.pos.x - w * this.coords[0].x,
      this.pos.y - h * this.coords[0].y
    );
    vertex(
      this.pos.x + w * this.coords[1].x,
      this.pos.y - h * this.coords[1].y
    );
    vertex(
      this.pos.x + w * this.coords[2].x,
      this.pos.y + h * this.coords[2].y
    );
    vertex(
      this.pos.x - w * this.coords[3].x,
      this.pos.y + h * this.coords[3].y
    );
    endShape(CLOSE);
  }

  isDead() {
    return this.alpha < 0;
  }
}

function colorFromHue(h) {
  const x = (h / 60) * 255;
  if (h < 60) return color(255, x, 0);
  if (h < 120) return color(255 - (x - 255), 255, 0);
  if (h < 180) return color(0, 255, x - 510);
  if (h < 240) return color(0, 255 - (x - 765), 255);
  if (h < 300) return color(x - 1020, 0, 255);
  if (h < 360) return color(255, 0, 255 - (x - 1275));
}

function randomColor() {
  return random([
    color("#26ccff"),
    color("#a25afd"),
    color("#ff5e7e"),
    color("#88ff5a"),
    color("#fcff42"),
    color("#ffa62d"),
    color("#ff36ff"),
  ]);
}
