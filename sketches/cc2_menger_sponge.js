let width = 800;
let height = 800;

class Box {
  constructor(p,x,y,z,r_) {
    this.pos = new p.createVector(x,y,z);
    this.r = r_;
  }

  generate(p) {
    const boxes = [];
    for (let x = -1; x < 2; x += 1) {
      for (let y = -1; y < 2; y += 1) {
        for (let z = -1; z < 2; z += 1) {
          const newR = this.r/3;
          const b = new Box(
            p,
            this.pos.x+x*newR,
            this.pos.y+y*newR,
            this.pos.z+z*newR,
            newR
          );
          boxes.push(b)
        }
      }
    }
    return boxes;
  }


  show(p) {
    const pos = this.pos;
    p.push();
    p.translate(pos.x, pos.y, pos.z);
    p.box(this.r);

    p.pop();
  }
}



export default function sketch (p) {
  let rotation = 0;
  let b;
  let sponge = [];
  let next = [];


  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    b = new Box(p, 0,0,0,200);
    sponge.push(b)
  };

  p.mousePressed = () => {
    sponge.forEach((box) => {
      const newBoxes = box.generate(p);
      next = [...next, ...newBoxes]
    });

    sponge = next;
  }


  p.draw = function () {
    p.background(51);
    p.stroke(255);
    p.noFill();

    p.rotateX(rotation);
    p.rotateY(rotation);

    sponge.forEach((box) => {
      box.show(p);
    })

    rotation += 0.01;
  };
};
