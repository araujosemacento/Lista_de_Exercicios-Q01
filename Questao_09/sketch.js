//questão 09

let colorPickerInicial, colorPickerFinal;

function setup() {
  createCanvas(360, 50);

  colorPickerInicial = createColorPicker("#ffffff");
  colorPickerFinal = createColorPicker("#000000");
}

function draw() {
  for (let i = 0; i <= 1; i += 0.001) {
    stroke(lerpColor(colorPickerInicial.color(), colorPrickerFinal.color(), i));
    line(map(i, 0, 1, 0, width), 0, map(i, 0, 1, 0, width), height);
  }
}
