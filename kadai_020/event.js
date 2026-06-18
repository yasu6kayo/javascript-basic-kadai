const Btn = document.getElementById('btn');

const Text = document.getElementById('text');


Btn.addEventListener('click', () => {
  Text.innerText = 'ボタンをクリックしました。';
});