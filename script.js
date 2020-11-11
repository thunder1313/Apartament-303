const hamburger = document.querySelector('.hamburger');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
}

hamburger.addEventListener('click', hamburgerClick);