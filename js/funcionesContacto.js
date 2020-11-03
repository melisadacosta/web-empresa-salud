function validar() {
    var error = false;
    var mensaje = document.getElementById("mensaje");
    var nombreApellido = document.getElementById("nombre-apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("correo").value;
    var regexTelefono = /^[0-9]{4}[\-]{1}[0-9]{4}$/;
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    var mensajesError = "";

    if (nombreApellido == '') {
        error = true;
        mensajesError += "<p>* El campo Nombre y Apellido no puede estar vacio.</p>";
    }
    if (telefono != null) {
        if (!regexTelefono.test(document.getElementById("telefono").value)) {
            error = true;
            mensajesError += "<p>* Ingrese un numero de telefono valido.</p>"
        }
    }
    if (email != null) {
        if (!regexEmail.test(document.getElementById("correo").value)) {
            error = true;
            mensajesError += "<p>* Ingrese un email valido.</p>"
        }
    }

    if (error) {
        mensaje.innerHTML = mensajesError;
        mensaje.classList.add('mostrar-error');
        return false;
    } else {
        mensaje.innerHTML = "<p>El formulario fue completado correctamente. Gracias por confiar en OSPF.</p>";
        mensaje.classList.add('mostrar-validacion');
        return false;
    }
}

const CANTIDAD_MAXIMA_CARACTERES = 1000;

function contarCaracteres() {
    var caracteresEscritos = document.getElementById("consulta").value.length;
    var restantes = CANTIDAD_MAXIMA_CARACTERES - caracteresEscritos;

    document.getElementById("mostrarCaracteres").innerHTML = restantes;
}