const inputPal = document.querySelector('#palindrome-input');
const btnPal = document.querySelector('.check');

btnPal.addEventListener('click', function(){
  const resultPal = document.getElementById('result-palindrome');
  printResultpal(resultPal);
})

function printResultpal(target){
  target.innerText = checkPalindrome(inputPal.value);
}

function checkPalindrome(string) {

  const len = string.length;

  for (let i = 0; i < len / 2; i++) {

    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}


// --------------


const evenOdd = document.querySelector('#select-evenodd');
const btnEvenodd = document.querySelector('.play');
const selectedNum = document.querySelector('#select-number');
let numValue;


btnEvenodd.addEventListener('click', function(){
  numValue = parseInt(selectedNum.value);
  const numPc = getRandomNumber(1, 5);
  const resultEvenodd = document.getElementById('result-evenodd');
  const gameSum = numPc + numValue;
  console.log(numValue);
  console.log(numPc);
  console.log(gameSum);
  printResultevenodd(resultEvenodd);

  function printResultevenodd(target){
    target.innerText = isEvenOdd(evenOdd.value, gameSum);
  }

})



function isEvenOdd (inputValue, sum){

  if (inputValue == 'odd' && (sum % 2)){
    return 'You won!';
  }

  return 'Try again...'

}

function getRandomNumber(min, max){
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}