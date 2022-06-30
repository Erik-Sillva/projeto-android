const btnMobile = document.getElementById('menu-mobile');

function toggleMenu() {
    const nav = document.getElementById('menu-desktop');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);