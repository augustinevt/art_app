const width = 400;
const height = 400;

class Star {
  constructor(p) {
    console.log(p.width)
    this.x = ((Math.random() * (width * 2)) - width);
    this.y = ((Math.random() * (height * 2)) - height);
    this.z = Math.random() * width;

    this.pz = this.z;
  }

  update(p) {
    this.z = this.z - p.map(p.mouseX, 0, width, 0, 20);

    if (this.z < 0) {
      this.z = width;
      this.x = ((Math.random() * (width * 2)) - width);
      this.y = ((Math.random() * (height * 2)) - height);
      this.pz = this.z;
    }
  }

  show(p) {
    p.fill(255);
    p.noStroke();

    const {x,y,z,pz} = this;
    const sx = p.map(x/z, 0, 1, 0, width);
    const sy = p.map(y/z, 0, 1, 0, height);
    const r = p.map(z, 0, width, 16, 0);

    const px = p.map(x/pz, 0, 1, 0, width);
    const py = p.map(y/pz, 0, 1, 0, height);

    p.ellipse(sx, sy, r, r);
    p.stroke(255)
    p.line(px, py, sx, sy);


  }
}

////////////

export default function sketch (p) {
  const stars = [];

  let i = 0;
  // let speed = ;

  while(i < 700) {
    stars.push(new Star(p));
    i += 1;
  }

  p.setup = function () {
    p.createCanvas(width, height);
    // p.createCanvas(400, 400, p.WEBGL);
  };

  p.draw = () => {
    p.background(0);
    p.translate(width/2, height/2)
    stars.forEach((star)=> {
      star.update(p);
      star.show(p);
    })
  };
};
