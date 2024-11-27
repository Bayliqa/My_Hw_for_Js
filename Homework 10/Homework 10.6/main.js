const input = document.getElementById('swap');
const resultDiv = document.getElementById('result');
input.oninput  = function () {
    resultDiv.textContent = +this.value * 2.2
}