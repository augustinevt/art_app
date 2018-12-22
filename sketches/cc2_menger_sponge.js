let width = 800;
let height = 800;

// import p5 from 'p5';
// import "p5/lib/addons/p5.sound.js";


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
          const sum = Math.abs(x) + Math.abs(y) + Math.abs(z);
          const newR = this.r/3;
          // for menger
          // if ( sum > 1 ) {
          if ( sum <= 1 ) {
            boxes.push(
              new Box(
                p,
                this.pos.x+x*newR,
                this.pos.y+y*newR,
                this.pos.z+z*newR,
                newR
              )
            )
          }
        }
      }
    }
    return boxes;
  }


  show(p) {
    const pos = this.pos;
    p.fill(233);
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
  let mic;

  p.setup = () => {
    p.createCanvas(width, height, p.WEBGL);
    b = new Box(p, 0,0,0,200);

    // mic = new p.AudioIn((e) => {
    //   console.log('mewo', e)
    // });

    // mic.start();

    sponge.push(b);

  };


  // p.touchStarted = () => {
  //   if (p.getAudioContext().state !== 'running') {
  //     p.getAudioContext().resume();
  //   }
  // }


  p.mousePressed = () => {

    // console.log(new p.Ad)
    // p.sound.start(
    //   () => console.log(started),
    //   (e) => {console.log(e)}
    // )



    const next = [];
    sponge.forEach((box) => {
      const newBoxes = box.generate(p);
      console.log()
      next.push(...newBoxes)
    });

    sponge = next;
  }


  p.draw = function () {
    p.background(51);
    p.stroke(255);
    p.noFill();

    p.rotateX(rotation);
    p.rotateY(rotation);
    p.ambientLight(150);
    p.ambientMaterial(250);

    sponge.forEach((box) => {
      box.show(p);
    })

    rotation += 0.01;
  };
};
