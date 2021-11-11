const hamburgerMenu = document.querySelector('.mobile-menu')
const menuitem = document.querySelector('.nav-menu')

// menuitem.style.maxHeight = '0px'


hamburgerMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (menuitem.style.maxHeight === '0px') {
        menuitem.style.maxHeight = '400px'
    }else if (menuitem.style.maxHeight = '400px') {
        menuitem.style.maxHeight = '0px'
    }
}