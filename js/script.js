// ------------ PALINDROMO ---------- //

const input = document.getElementById('palindrome-input').value;

const btn = document.querySelector('.verifica');

btn.addEventListener('click', function(){
  const result = document.getElementById('result-palindrome');
  result.innerText = checkPalindrome(input);
})

function checkPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++)

  if (string[i] !== string[string.length - 1 - i]) {
    return 'It is not a palindrome.';
  }
  return 'It\'s a palindrome.';
}

