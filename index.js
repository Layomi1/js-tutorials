// Import stylesheets
import './style.css';
let hands = ['rock', 'paper', 'scissors'];

function getRandomHand() {
  let randomItem = Math.floor(Math.random() * 3);
  return hands[randomItem];
}
console.log(getRandomHand());

let fruit = ['apple', 'orange', 'apple', 'apple', 'orange'];
let appleShelf = document.querySelector('#apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');
console.log(orangeShelf);
function fruitArrangement() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === 'apple') {
      appleShelf.textContent += 'apple' + ' ';
    } else {
      orangeShelf.textContent += 'orange' + ' ';
    }
  }
}
fruitArrangement();
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
