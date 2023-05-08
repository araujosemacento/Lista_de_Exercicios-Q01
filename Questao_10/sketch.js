//questão 10

let ladox0, ladoy0, ladox1, ladoy1, ladox2, ladoy2;

function setup() {
  createCanvas(400, 400);
  createP("Vértice 1:");
  ladox0Slider = createSlider(0, width, 150);
  ladoy0Slider = createSlider(0, height, 50);
  createP("Vértice 2:");
  ladox1Slider = createSlider(0, width, 50);
  ladoy1Slider = createSlider(0, height, 300);
  createP("Vértice 3:");
  ladox2Slider = createSlider(0, width, 300);
  ladoy2Slider = createSlider(0, height, 250);
}

function draw() {
  background(255);
  ladox0 = ladox0Slider.value();
  ladoy0 = ladoy0Slider.value();
  ladox1 = ladox1Slider.value();
  ladoy1 = ladoy1Slider.value();
  ladox2 = ladox2Slider.value();
  ladoy2 = ladoy2Slider.value();

  beginShape();
  vertex(ladox0, ladoy0);
  vertex(ladox1, ladoy1);
  vertex(ladox2, ladoy2);
  vertex(ladox0, ladoy0);
  endShape();
}
