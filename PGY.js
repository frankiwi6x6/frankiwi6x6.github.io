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

function descargarApp() {
    // URL del archivo .apk
    var urlApk = "https://pro-app-storage.s3.amazonaws.com/builds/736fb946-b6dd-495e-bc9b-a6df321cf96a-debug.apk?AWSAccessKeyId=ASIAUUWEHETW5SOP3SM7&Signature=OnnmJ67OFzECrllJO2wMNL4OcEM%3D&x-amz-security-token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD6v7cawZI3rhFVKLYeVceLgTXO1TeOp4QViTklfzyTygIhAKbj7AGWLypASTcACNHGGt%2FVspSPLx21KcAJGKbKMrv9KpsECH4QABoMMzE5MzEyODMxNzI1IgzMPpqV19jbaYFzlWAq%2BAMgI3YJESy%2B7R5LWI1v57%2FEydjuM1nfYUSD%2FS4L0Oz9lVFJRh3E5XkC04yApHQXZByeye0LBoz4bVnejxpHYIW4zheR3C%2FdONbH8Cp1Cd425a723%2BnSoeE3rOX8LVpEmcom715lDVTE3zo5e6jqDv%2Bj%2ByalRKVY1%2BbxwZi2D0SUv1Qfleo5Xa%2Bx4QFCBbDTiYLCEESL4jwilm%2BIYV451tdkRvwGORv%2BSA1wLMFIl%2BZAmK6wuTMd5aVJbPyVOoMo9A8JCCYmuyzSliUeiDhNkvFrlLgqlw1wR7wHDWMIBFW5cwO99u7SCT%2FtfHa9ghieBTSZo%2Fye32vomZQGWItqmTkgmt2iuT4yaSFSPB9WRcRp0CBdGknXyoT82XunBF9oht1cY5xa64mzYUyRiGrklvzgKKZh2gzht45%2BTeGVdm52wj3kgN4bVvG4rzXBRnR9mOSrLiVzKYe1my9qRYfTde9KGxX3iODsUAspntoc4U9IRmwApvQQPsnPwBA2%2BO%2F%2BHYRY5cuJQeQZ78h4H4v%2FjDbf1r13hdbN4cviyIvlD%2Funv%2B3ZF%2FrgsKaSMYFs5wRAQhre9JzmhjjTksVFb%2B90zaGOj%2FB8ICrbc9At7sXkMHdXBfIALmWTgCHUrBt8TZoUjPHGH%2BGqhL6sj0tW9J6N9mYwdYFaQZgzVusw%2Fr2JqwY6pQGSciDoDsrQ3ztDbiL%2FGPfxbw090DRtrWm71G9elKu%2Fn%2F6NtOA%2FsqyHpcwlwo1XFvOULjKnKyO0rUS6fgldc3waPjYdS3Y0kQFBBQpTMJf18ObTkxZyLb8kc70v5sJx4sxgmwbuzlYyilTK7%2F1vRYiqPEiaV%2B9bRuesfhlDav5TROpv7pRHpnvYUvZdW8ZIn1JFM79bvYmxzC6hfU2UKTAtULdkt9M%3D&Expires=1700953976";

    // Abrir la URL en una nueva ventana
    window.open(urlApk, '_blank');
}

