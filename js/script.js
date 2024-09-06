document.getElementById("formularioContacto").addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const inputEmail = document.getElementById('email');
    const inputEdad = document.getElementById('edad');

    const errorNombre = document.getElementById('mensaje_nombre');
    const errorApellido = document.getElementById('mensaje_apellido');
    const errorEmail = document.getElementById('mensaje_email');
    const errorEdad = document.getElementById('mensaje_edad');

    let esFormularioValido = true;

    // Validar Nombre
    if (inputNombre.value.trim() === '') {
        errorNombre.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorNombre.classList.remove('d-block');
    }

    // Validar Apellido
    if (inputApellido.value.trim() === '') {
        errorApellido.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorApellido.classList.remove('d-block');
    }

    // Validar Email
    if (inputEmail.value.trim() === '') {
        errorEmail.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorEmail.classList.remove('d-block');
    }

    // Validar Edad
    if (inputEdad.value.trim() === '' || isNaN(inputEdad.value) || inputEdad.value <= 0) {
        errorEdad.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorEdad.classList.remove('d-block');
    }

    // Si todo está validado
    if (esFormularioValido) {
        console.log('El Formulario de '+inputNombre.value+' '+inputApellido.value+' es válido');
        alert('Formulario válido');
        // Aquí puedes añadir el código para enviar el formulario o manejarlo según tus necesidades
    }
});
