const menuHamburguesa = document.getElementById('menu_hamburguesa')
const cerrarmenuHamburguesa = document.getElementsByClassName('cerrar_menu_hamburguesa')[0]
const contenedorMenuHamburguesa = document.getElementsByClassName('nav-bar_menu_hamburguesa')[0]

menuHamburguesa.addEventListener('click', () => {
  contenedorMenuHamburguesa.classList.toggle('menu_hamburguesa-active')
})

cerrarmenuHamburguesa.addEventListener('click', () => {
  contenedorMenuHamburguesa.classList.toggle('menu_hamburguesa-active')
})