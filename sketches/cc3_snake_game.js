export default function sketch (p) {
  const width = 800;
  const height = 800;
  let s;
  let scale = 20;

  ////////////

  class Snake {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.xspeed = 1;
      this.yspeed = 0;
    }

    update() {
      this.x = this.x + this.xspeed * scale;
      this.y = this.y + this.yspeed * scale;

      this.x = p.constrain(this.x, 0, width-scale);
      this.y = p.constrain(this.y, 0, height-scale);
    }

    show() {
      p.fill(255)
      p.rect(this.x, this.y, 10, 10)
    }

    dir(x,y) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }


////////////

  p.setup = function () {
    p.createCanvas(width, height);
    s = new Snake();
  };

  p.draw = () => {
    p.background(55);
    s.update();
    s.show();
  }

  p.keyPressed = () => {
    if (p.keyCode === p.UP_ARROW) {
      s.dir(0,-1)
    } else if (p.keyCode === p.DOWN_ARROW) {
      s.dir(0, 1)
    } else if (p.keyCode === p.RIGHT_ARROW) {
      s.dir(1, 0)
    } else if (p.keyCode === p.LEFT_ARROW) {
      s.dir(-1, 0)
    }
  }
};
