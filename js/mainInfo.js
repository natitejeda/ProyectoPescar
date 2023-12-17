const subtitulos = document.querySelectorAll('.subtitulo');

subtitulos.forEach(subtitulo => {
    subtitulo.addEventListener('click', () => {
        subtitulos.forEach(item => {
            item.classList.remove('subtitulo-activo');
        });

        subtitulo.classList.add('subtitulo-activo');
    });
});

// const titulos = document.querySelectorAll('.menu-lateral li a');
// titulos.forEach(titulo => {
//     titulo.addEventListener('click', () => {
//         titulos.forEach(item => {
//             item.classList.remove('titulo-activo');
//         });

//         titulo.classList.add('titulo-activo');
//     });
// });