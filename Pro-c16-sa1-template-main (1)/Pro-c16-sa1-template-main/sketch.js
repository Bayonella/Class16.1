
var box1;

function setup() {
  createCanvas(600, 400);
  box1=new Box();
  cereza=new Box();
  cereza.y=250;
}

function draw() {
  background(220);
box1.show();
box1.set_width(40);
cereza.show();
cereza.set_width(60);
}

