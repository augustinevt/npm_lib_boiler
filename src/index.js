import * as p5 from 'p5';

let s = (sk) => {

  sk.setup = () => {
    sk.createCanvas(720, 400);
    sk.background(230);
    sk.strokeWeight(2);
  }

  sk.draw = () => {
    if (sk.mouseIsPressed){
      sk.stroke(255);
    }
    else {
      sk.stroke(237,34,93);
    }
    sk.line(sk.mouseX-66, sk.mouseY, sk.mouseX+66, sk.mouseY);
    sk.line(sk.mouseX, sk.mouseY-66, sk.mouseX, sk.mouseY+66);
  }
}

const P5 = new p5(s);
