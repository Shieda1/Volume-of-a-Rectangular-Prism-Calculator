// https://calculator.swiftutors.com/volume-of-a-rectangular-prism-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeofRectangularPrismRadio = document.getElementById('volumeofRectangularPrismRadio');
const lengthofRectangularPrismRadio = document.getElementById('lengthofRectangularPrismRadio');
const widthofRectangularPrismRadio = document.getElementById('widthofRectangularPrismRadio');
const heightofRectangularPrismRadio = document.getElementById('heightofRectangularPrismRadio');

let volumeofRectangularPrism;
let lengthofRectangularPrism = v1;
let widthofRectangularPrism = v2;
let heightofRectangularPrism = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

volumeofRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Rectangular Prism';
  variable2.textContent = 'Width of Rectangular Prism';
  variable3.textContent = 'Height of Rectangular Prism';
  lengthofRectangularPrism = v1;
  widthofRectangularPrism = v2;
  heightofRectangularPrism = v3;
  result.textContent = '';
});

lengthofRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Rectangular Prism';
  variable2.textContent = 'Width of Rectangular Prism';
  variable3.textContent = 'Height of Rectangular Prism';
  volumeofRectangularPrism = v1;
  widthofRectangularPrism = v2;
  heightofRectangularPrism = v3;
  result.textContent = '';
});

widthofRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Rectangular Prism';
  variable2.textContent = 'Length of Rectangular Prism';
  variable3.textContent = 'Height of Rectangular Prism';
  volumeofRectangularPrism = v1;
  lengthofRectangularPrism = v2;
  heightofRectangularPrism = v3;
  result.textContent = '';
});

heightofRectangularPrismRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume of Rectangular Prism';
  variable2.textContent = 'Length of Rectangular Prism';
  variable3.textContent = 'Width of Rectangular Prism';
  volumeofRectangularPrism = v1;
  lengthofRectangularPrism = v2;
  widthofRectangularPrism = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeofRectangularPrismRadio.checked)
    result.textContent = `Volume of Rectangular Prism = ${computeVolumeofRectangularPrism().toFixed(2)}`;

  else if(lengthofRectangularPrismRadio.checked)
    result.textContent = `Length of Rectangular Prism = ${computeLengthofRectangularPrism().toFixed(2)}`;

  else if(widthofRectangularPrismRadio.checked)
    result.textContent = `Width of Rectangular Prism = ${computeWidthofRectangularPrism().toFixed(2)}`;

  else if(heightofRectangularPrismRadio.checked)
    result.textContent = `Height of Rectangular Prism = ${computeHeightofRectangularPrism().toFixed(2)}`;
})

// calculation

function computeVolumeofRectangularPrism() {
  return Number(lengthofRectangularPrism.value) * Number(widthofRectangularPrism.value) * Number(heightofRectangularPrism.value);
}

function computeLengthofRectangularPrism() {
  return Number(volumeofRectangularPrism.value) / (Number(widthofRectangularPrism.value) * Number(heightofRectangularPrism.value));
}

function computeWidthofRectangularPrism() {
  return Number(volumeofRectangularPrism.value) / (Number(lengthofRectangularPrism.value) * Number(heightofRectangularPrism.value));
}

function computeHeightofRectangularPrism() {
  return Number(volumeofRectangularPrism.value) / (Number(lengthofRectangularPrism.value) * Number(widthofRectangularPrism.value));
}