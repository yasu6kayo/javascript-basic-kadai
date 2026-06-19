const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log('非同期処理');
  }, 2000);
});