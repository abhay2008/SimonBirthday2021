var fireworks = [];
var gravity;
let systems = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canv=createCanvas(windowWidth, windowHeight);
  let value=10/100*windowHeight;
  let stuff=document.getElementsByClassName('.container')
  console.log(stuff);
  
  canv.style('margin-left','0.3vw');
  canv.position(0,0);
  
  gravity = createVector(0, 0.2);

  schoolPride();

}

function schoolPride() {
  const s1 = new ParticleSystem(0, radians(25.5), radians(310), 0, height/2 + 100);
  const s2 = new ParticleSystem(0, radians(25.5), radians(230), width, height/2 + 50);
  s1.pride = true;
  s2.pride = true;
  systems.push(s1);
  systems.push(s2);
}

function draw() {
  clear();
  background(0, 0);

  if (random(1) < 0.03) {
    fireworks.push(new Firework());
   }
  for (var i = fireworks.length-1; i >= 0; i--) {
     fireworks[i].update();
     fireworks[i].show();
     if (fireworks[i].done()) {
       //fireworks.spilce(i, 1);
     }
   }
   for (let i = systems.length-1; i >= 0; i--) {
    const s = systems[i];
    if (s.pride && s.frames > 0) {
      let r=Math.floor(Math.random(255));
      let g=Math.floor(Math.random(255));
      let b=Math.floor(Math.random(255));
      s.addParticle(color(r, g, b));
      s.addParticle(color(r, g, b));
    }
    s.run();
    if (s.isDead()) {
     systems.splice(i, 1);
    }
  }
}