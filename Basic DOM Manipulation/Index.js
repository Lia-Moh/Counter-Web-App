
let count = localStorage.getItem('myCount') ? parseInt(localStorage.getItem('myCount')) : 0;

const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

counterDisplay.innerText = count;

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    counterDisplay.innerText = count;
    localStorage.setItem('myCount', count.toString());
}
