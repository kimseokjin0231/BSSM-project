const toggleBtn = document.querySelector(".header_toogleBtn");
const menu = document.querySelector(".header_menu");
const loginbar = document.querySelector(".header_loginbar");

function Clicktoggle() {
    menu.classList.toggle('active');
    loginbar.classList.toggle('active');
}

toggleBtn.addEventListener('click', Clicktoggle);