class Confetti extends ParticleC {
  render() {
    const w = 2 * this.radius * sin(this.angle);
    const h = 2 * this.radius * cos(this.angle);
    noStroke();
    fill(red(this.col), green(this.col), blue(this.col), this.alpha);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, w, h);
  }
}