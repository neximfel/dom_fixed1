const book = document.getElementById('book_now');
const widow = document.querySelector('.sec2');
const krestik = document.getElementById('krest');
book.addEventListener('click', () => {
    widow.style.display = 'flex';
});
krestik.addEventListener('click', () => {
    widow.style.display = 'none';
});
