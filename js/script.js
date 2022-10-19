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


const inputNum = document.querySelector('#select-number');
const evenOdd = document.querySelector('#select-evenodd');
const sum = randomNumber + inputNum.value;
const btnEvenodd = document.querySelector('.play');

btnEvenodd.addEventListener('click', function(){
  const resultEvenodd = document.getElementById('result-evenodd');
  printResultevenodd(resultEvenodd);
})

function printResultevenodd(target){
  target.innerText = isEvenOdd;
}

function isEvenOdd (){

  if (evenOdd.value === 'odd' && (sum % 2)){
    return 'You won!';
  }

  return 'Try again...'

}

function getRandomNumber(min, max){
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

