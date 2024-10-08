document.addEventListener('DOMContentLoaded', () => {
    // Manejar el clic en el botón "Comprar"
    document.querySelectorAll('.btn-carrito').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Obtener la información del producto
            const name = e.target.getAttribute('data-name');
            const price = e.target.getAttribute('data-price');
            const image = e.target.getAttribute('data-image');

            // Crear el objeto producto
            const product = { name, price, image };

            // Leer el carrito actual del localStorage (o inicializarlo si está vacío)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Agregar el nuevo producto al carrito
            cart.push(product);

            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirigir al carrito
            window.location.href = 'carrito.html';
        });
    });
});
