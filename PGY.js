document.addEventListener('DOMContentLoaded', function () {
    function detectarDispositivo() {
        // Obtenemos el ancho de la ventana
        var anchoVentana = window.innerWidth;

        // Referencia a los contenedores
        var contenedorBoton = document.getElementById('contenedorBoton');
        var contenedorQR = document.getElementById('contenedorQR');

        // Verificamos si el ancho de la ventana es menor que el ancho de referencia
        if (anchoVentana < 768) {
            // Es un dispositivo móvil
            contenedorBoton.style.display = 'block';
            contenedorQR.style.display = 'none';
        } else {
            // Es un dispositivo de escritorio
            contenedorBoton.style.display = 'none';
            contenedorQR.style.display = 'block';
        }
    }

    // Llamamos a la función al cargar la página
    detectarDispositivo();

    // Llamamos a la función en respuesta a eventos como el cambio de tamaño de la ventana
    window.addEventListener('resize', detectarDispositivo);

});
