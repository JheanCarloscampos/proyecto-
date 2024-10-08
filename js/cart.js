document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout-button'); // Obtén el botón de compra

    // Leer el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para verificar si el carrito está vacío y desactivar el botón de compra
    function checkCartEmpty() {
        if (cart.length === 0) {
            checkoutButton.disabled = true; // Desactivar el botón si no hay productos
        } else {
            checkoutButton.disabled = false; // Activar el botón si hay productos
        }
    }

    // Si el carrito no tiene productos, muestra un mensaje
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        let total = 0;

        // Mostrar cada producto en el carrito
        cart.forEach(product => {
            const { name, price, image } = product;

            // Crear un nuevo elemento para cada producto
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${image}" alt="${name}">
                <div class="product-details">
                    <h4>${name}</h4>
                    <p>Precio unitario: $${parseFloat(price).toLocaleString('es-CO', { minimumFractionDigits: 0 })}</p>
                    <p>Subtotal: <span class="product-subtotal">$${parseFloat(price).toLocaleString('es-CO', { minimumFractionDigits: 0 })}</span></p>
                    <p>Cantidad: 
                        <input type="number" value="1" min="1" class="quantity-input">
                    </p>
                </div>
                <div class="remove-item">
                    <button class="remove-button">Eliminar</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);

            // Actualizar el total por cada producto
            total += parseFloat(price);
        });

        // Mostrar el total inicial
        totalElement.textContent = total.toLocaleString('es-CO', { minimumFractionDigits: 0 });
    }

    // Verificar si el carrito está vacío al cargar
    checkCartEmpty();

    // Función para manejar los cambios de cantidad
    cartItemsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const quantityInput = e.target;
            const quantity = parseInt(quantityInput.value);
            const cartItem = quantityInput.closest('.cart-item');
            const price = parseFloat(cartItem.querySelector('.product-details p').textContent.replace(/[^0-9.-]+/g, ""));
            const subtotalElement = cartItem.querySelector('.product-subtotal');

            // Calcular el subtotal
            const newSubtotal = price * quantity;
            subtotalElement.textContent = `$${newSubtotal.toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;

            // Calcular el total
            recalculateTotal();
        }
    });

    // Manejar la eliminación de productos
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-button')) {
            const itemToRemove = e.target.closest('.cart-item');
            const productName = itemToRemove.querySelector('h4').textContent;

            itemToRemove.remove();

            // Actualizar el carrito en localStorage
            cart = cart.filter(product => product.name !== productName);
            localStorage.setItem('cart', JSON.stringify(cart));

            // Calcular total
            recalculateTotal();

            // Verificar si se debe desactivar el botón de compra
            checkCartEmpty();
        }
    });

    // Función para calcular el total del carrito
    function recalculateTotal() {
        let newTotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const subtotal = parseFloat(item.querySelector('.product-subtotal').textContent.replace(/[^0-9.-]+/g, ""));
            newTotal += subtotal;
        });
        totalElement.textContent = newTotal.toLocaleString('es-CO', { minimumFractionDigits: 0 });
    }

    // Con esto finalizo la compra
    checkoutButton.addEventListener('click', () => {
        alert('Compra finalizada. ¡Gracias por tu compra!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; // me devuelve a la página principal
    });
});
