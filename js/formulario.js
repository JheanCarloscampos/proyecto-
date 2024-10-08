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

    // Validar Nombre (solo letras, no números ni caracteres especiales)
    const regexNombreApellido = /^[a-zA-Z\s]+$/;
    if (inputNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor ingresa tu nombre.';
        errorNombre.classList.add('d-block');
        esFormularioValido = false;
    } else if (!regexNombreApellido.test(inputNombre.value.trim())) {
        errorNombre.textContent = 'El nombre solo puede contener letras y espacios, sin números ni caracteres especiales.';
        errorNombre.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorNombre.classList.remove('d-block');
    }

    // Validar Apellido (solo letras, no números ni caracteres especiales)
    if (inputApellido.value.trim() === '') {
        errorApellido.textContent = 'Por favor ingresa tu apellido.';
        errorApellido.classList.add('d-block');
        esFormularioValido = false;
    } else if (!regexNombreApellido.test(inputApellido.value.trim())) {
        errorApellido.textContent = 'El apellido solo puede contener letras y espacios, sin números ni caracteres especiales.';
        errorApellido.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorApellido.classList.remove('d-block');
    }

    // Validar Email (formato de email correcto)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail.value.trim() === '') {
        errorEmail.textContent = 'Por favor ingresa tu email.';
        errorEmail.classList.add('d-block');
        esFormularioValido = false;
    } else if (!regexEmail.test(inputEmail.value.trim())) {
        errorEmail.textContent = 'El email debe tener un formato válido, como ejemplo@dominio.com.';
        errorEmail.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorEmail.classList.remove('d-block');
    }

    // Validar Edad (número mayor que 0)
    if (inputEdad.value.trim() === '') {
        errorEdad.textContent = 'Por favor ingresa tu edad.';
        errorEdad.classList.add('d-block');
        esFormularioValido = false;
    } else if (isNaN(inputEdad.value) || inputEdad.value <= 0) {
        errorEdad.textContent = 'Por favor ingresa una edad válida (mayor que 0).';
        errorEdad.classList.add('d-block');
        esFormularioValido = false;
    } else {
        errorEdad.classList.remove('d-block');
    }

    // Si todo está validado
    if (esFormularioValido) {
        alert('Formulario válido');
        
        
         // Limpiar los campos del formulario
        inputNombre.value = '';
        inputApellido.value = '';
        inputEmail.value = '';
        inputEdad.value = '';
    }
});
