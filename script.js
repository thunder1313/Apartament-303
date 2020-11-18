const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('#logo');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    sidebar.classList.toggle('sidebar--active');
    logo.classList.toggle('logo--active');
}

hamburger.addEventListener('click', hamburgerClick);