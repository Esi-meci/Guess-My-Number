'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10 - 5;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// First pattern
// function con() {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number🎉';
// }
// document.querySelector('.check').addEventListener('click', con);

// Second Pattern

// console.log(secretNumber);

let deciNumber = Math.random() * 20;
let secretNumber = Math.trunc(deciNumber) + 1;
let curScore = document.querySelector('.score');
let message = document.querySelector('.message');

function changeNumber(number) {
  return (document.querySelector('.number').textContent = number);
}
function changeBody(color) {
  return (document.querySelector('body').style.backgroundColor = color);
}

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  message.textContent = 'Correct Number 🎈';
  let guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  // when there is no input
  if (!guess) {
    message.textContent = 'please input a number ⛔';
    // When player wins
  } else if (guess === secretNumber) {
    const score = Number(curScore.textContent);
    const highscore = Number(document.querySelector('.highscore').textContent);
    changeNumber(secretNumber);

    // changing the sytle and highscore
    // document.body.style.backgroundColor = '#60b347';
    changeBody('#60b347');
    // document.querySelector('.number').style.fontSize = '80px';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    message.textContent = 'Correct Number!🎉';
  } else {
    const score = Number(curScore.textContent) - 1;
    curScore.textContent = score;
    if (guess < secretNumber) {
      message.textContent = '📉 Too Low';
    } else {
      message.textContent = '📈 Too High';
    }
    document.querySelector('.guess').value = '';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.body.style.backgroundColor = '#222';
  changeBody('#222');
  curScore.textContent = 20;
  changeNumber('?');
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
  message.textContent = 'Start guessing...';

  deciNumber = Math.random() * 20;
  secretNumber = Math.trunc(deciNumber) + 1;
  console.log(secretNumber);
});

// Refactoring
// this means restrucring the code without changing how it works.
