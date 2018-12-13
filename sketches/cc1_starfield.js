const width = 400;
const height = 400;

class Star {
  constructor(p) {
    console.log(p.width)
    this.x = ((Math.random() * (width * 2)) - width);
    this.y = ((Math.random() * (height * 2)) - height);
    this.z = Math.random() * width;
  }

  update(p) {
    // let {x,y,z} = this;
    this.z = this.z - 10;

    if (this.z < 0) {
      this.z = width;
      this.x = ((Math.random() * (width * 2)) - width);
      this.y = ((Math.random() * (height * 2)) - height);
    }
  }

  show(p) {
    const {x,y,z} = this;

    const sx = p.map(x/z, 0, 1, 0, width);
    const sy = p.map(y/z, 0, 1, 0, height);

    p.fill(255);
    p.noStroke();
    p.ellipse(sx, sy, 8, 8);
  }
}




export default function sketch (p) {
  const stars = [];
  let i = 0;

  while(i < 400) {
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
      star.update();
      star.show(p);
    })
  };
};

// p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation){
    //     rotation = props.rotation * Math.PI / 180;
    //   }
    // };
