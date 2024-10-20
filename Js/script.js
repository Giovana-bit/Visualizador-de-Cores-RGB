const redRange = document.getElementById('red');
const greenRange = document.getElementById('green');
const blueRange = document.getElementById('blue');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const colorBox = document.querySelector('.color-box');

function updateColor() {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;

    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    // Atualizando os valores dos inputs de texto
    redValue.value = red;
    greenValue.value = green;
    blueValue.value = blue;
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);