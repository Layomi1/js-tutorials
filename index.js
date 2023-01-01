// Import stylesheets
import './style.css';
let hands = ['rock', 'paper', 'scissors'];

function getRandomHand() {
  let randomItem = Math.floor(Math.random() * 3);
  return hands[randomItem];
}
console.log(getRandomHand());

 let fruit = [
  'apple','orange','apple','apple' 
 ]
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
