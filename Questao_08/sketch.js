//questão 08

let x, y, largura, altura, colorPicker;

function setup() {
  createCanvas(400, 400);

  xSlider = createSlider(0, width, width / 2);
  ySlider = createSlider(0, height, height / 2);
  larguraSlider = createSlider(10, 200, 100);
  alturaSlider = createSlider(10, 200, 100);
  colorPicker = createColorPicker("#ff0000");

  x = xSlider.value();
  y = ySlider.value();
  largura = larguraSlider.value();
  altura = alturaSlider.value();

  rectMode(CENTER);
}

function draw() {
  background(0);

  x = xSlider.value();
  y = ySlider.value();
  largura = larguraSlider.value();
  altura = alturaSlider.value();

  fill(colorPicker.color());
  rect(x, y, largura, altura);
}
