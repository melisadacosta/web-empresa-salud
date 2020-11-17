
function validar() {
    var error = false;
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje");
    var telefono = document.getElementById("telefono").value;
    var dni = document.getElementById("dni").value;
    var regexTelefono = /^[0-9]{4}[\-]{1}[0-9]{4}$/;
    var mensajesError = "";

    if (nombre == '') {
        error = true;
        mensajesError += "<p>* El campo Nombre y Apellido no puede estar vacio.</p>";
    }
    if (dni == '' || dni.length < 8 || dni.length > 8) {
        error = true;
        mensajesError += "<p>* Ingrese un numero de DNI valido.</p>";

    }
    if (telefono != null) {
        if (!regexTelefono.test(document.getElementById("telefono").value)) {
            error = true;
            mensajesError += "<p>* Ingrese un numero de telefono valido.</p>"
        }
    }

    function validarSintomas(nombreName, sintoma) {
        var selecionado = false;
        var opciones = document.getElementsByName(nombreName);
        for (i in opciones) {
            if (opciones[i].checked) {
                selecionado = true;
            }
        }
        if (!selecionado) {
            error = true;
            mensajesError += "<p>" + sintoma + "</p>";
        }
    }

    var preguntaFiebre = "* Debe responder a la pregunta: ¿Tuviste Fiebre mayor 38 grados?";
    validarSintomas('fiebre', preguntaFiebre);
    var preguntaDolorDeCabeza = "* Debe responder a la pregunta: ¿Tuviste dolor de cabeza?";
    validarSintomas('dolor-cabeza', preguntaDolorDeCabeza);
    var preguntaTos = "* Debe responder a la pregunta: ¿Tuviste una tos persistente?";
    validarSintomas('tos', preguntaTos);
    var preguntaDolorGarganta = "* Debe responder a la pregunta: ¿Tuviste dolor de garganta?";
    validarSintomas('garganta', preguntaDolorGarganta);
    var preguntaRespiracion = "* Debe responder a la pregunta: ¿Tuviste dificultad para respirar?";
    validarSintomas('respiracion', preguntaRespiracion);
    
    var totalSintomas = 0;

    function contadorDeSintomas(nombreName) {
        var opciones = document.getElementsByName(nombreName);
        for (i in opciones) {
            if (opciones[i].value == "si" && opciones[i].checked) {
                totalSintomas++;
            }
        }
    }

    contadorDeSintomas('fiebre');
    contadorDeSintomas('dolor-cabeza');
    contadorDeSintomas('tos');
    contadorDeSintomas('garganta');
    contadorDeSintomas('respiracion');

    if (error) {
        mensaje.innerHTML = mensajesError;
        mensaje.classList.add('mostrar-error');
        return false;
    } else {
        mensaje.innerHTML = "<p>El formulario fue completado correctamente. " + totalSintomas + " sintomas de COVID-19 fueron registrados</p>";
        mensaje.classList.add('mostrar-validacion');
        return false;
    }
}

function mostrarOpciones(nombreRadio, nombreSelectId) {
    var opciones = document.getElementsByName(nombreRadio);

    for (i in opciones) {
        if (opciones[i].value == "si" && opciones[i].checked) {
            document.getElementById(nombreSelectId).style.display = "flex";
        }
        if (opciones[i].value == "no" && opciones[i].checked) {
            document.getElementById(nombreSelectId).style.display = "none";
        }
    }
}


