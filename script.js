const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('#logo');

// const windowWidth = document.querySelector('#width');

const hamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    sidebar.classList.toggle('sidebar--active');
    logo.classList.toggle('logo--active');
}

const windowResized = () =>{
    if(window.innerWidth > 800){
        hamburger.classList.remove('hamburger--active');
        sidebar.classList.remove('sidebar--active');
        logo.classList.remove('logo--active');
    }
}

hamburger.addEventListener('click', hamburgerClick);
window.addEventListener('resize', windowResized)