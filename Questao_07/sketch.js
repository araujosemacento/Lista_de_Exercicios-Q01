// questão 07

let x, y, diameter;

function setup() {
  createCanvas(400, 400);

  xSlider = createSlider(0, width, width / 2);
  ySlider = createSlider(0, height, height / 2);
  diameterSlider = createSlider(10, 200, 100);

  x = xSlider.value();
  y = ySlider.value();
  diameter = diameterSlider.value();
}

function draw() {
  background(0);

  x = xSlider.value();
  y = ySlider.value();
  diameter = diameterSlider.value();

  ellipse(x, y, diameter, diameter);
}
