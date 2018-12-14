let width = 800;
let height = 800;

class Box {
  constructor(p, x,y,z,r_) {
    this.pos = new p.createVector(x,y,z);
    this.r = r_;
  }


  show(p) {
    const pos = this.pos;
    p.pushMatrix();
    p.translate(pos.x, pos.y, pos.z);
    p.box(r);
    p.popMatrix();
  }


}



export default function sketch (p) {
  let rotation = 0;
  let b;

  p.setup = function () {
    p.createCanvas(width, height, p.WEBGL);
    b = new Box(p, 0,0,0,200);
  };


  p.draw = function () {
    p.background(51);
    p.stroke(255);
    p.noFill();

    p.rotateX(rotation);
    p.box(100);

    rotation += 0.01;
  };
};
