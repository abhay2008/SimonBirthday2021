class ParticleSystem {
  constructor(num, spread, direction, x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
    this.spread = spread;
    this.direction = direction;
    for (let i = 0; i < num; i++) {
      this.addParticle();
    }
    this.frames = 5000;
  }

  addParticle(col) {
    const dir = this.direction + random(-this.spread, this.spread);
      this.particles.push(new ParticleC(dir, 90, this.origin.x, this.origin.y, col));
  }

  run() {
    this.frames--;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  isDead() {
    return this.particles.every(p => p.isDead());
  }
}