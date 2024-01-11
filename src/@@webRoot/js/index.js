let menuBurger = document.querySelector('.menu-burger')
let navigation = document.querySelector('.hero__navigation')

menuBurger.addEventListener ('click', () => {
    navigation.classList.toggle('active-menu')
})