const navbar = document.getElementById('about');
const popup = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

navbar.addEventListener('click', () =>  {
    popup.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})