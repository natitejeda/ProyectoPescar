const subtitulos = document.querySelectorAll('.subtitulo');

subtitulos.forEach(subtitulo => {
    subtitulo.addEventListener('click', () => {
        subtitulos.forEach(item => {
            item.classList.remove('subtitulo-activo');
        });

        subtitulo.classList.add('subtitulo-activo');
    });
});