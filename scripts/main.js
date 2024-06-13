const menu = document.querySelector('.menu')
const burgerButton = document.querySelector('.burger-button')

let isMenuOpen = false
burgerButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen
    if(isMenuOpen) {
        menu.classList.add('menu-open')
        burgerButton.classList.add('burger-button-open')
    }
    if(!isMenuOpen) {
        menu.classList.remove('menu-open')
        burgerButton.classList.remove('burger-button-open')
    }
})