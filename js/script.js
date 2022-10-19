const string = document.getElementById('palindrome-input').value;

const btn = document.querySelector('.verifica');

btn.addEventListener('click', function(){
  const result = document.getElementById('result-palindrome');
  printResult(result);
})

function printResult(target){
  target.innerText = checkPalindrome(string);
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