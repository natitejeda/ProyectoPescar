function irArriba(pxPantalla) { // pxPantalla es un parámetro (valor que recibe la función)
    window.addEventListener('scroll', () => { //evento de scroll
        let scroll = document.documentElement.scrollTop; //variable que almacena la cantidad de pixeles que bajamos (scroll)
        let botonArriba = document.getElementById('botonArriba'); //variable que almacena nuestro botón

        //selectiva
        if (scroll > pxPantalla) {
            botonArriba.style.right = 30 + "px"; //aparece botón a 30px a la derecha
        } else {
            botonArriba.style.right = -100 + "px"; //botón se esconde a -100 px
        }
    })
}

irArriba(100); //llamado a la función, 100 = pxPantalla