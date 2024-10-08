// Sección Adidas
const adidasProductList = document.getElementById('adidas');

const fetchAdidasPromise = fetch("productos-adidas.json");
fetchAdidasPromise
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    const adidasProducts = data.adidas; // Acceder a los productos de Adidas
    
    adidasProducts.forEach((product) => {
        // Crear un div de columna
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card h-100'; 

        // Crear la imagen
        const img = document.createElement('img');
        img.src = product.imagen;
        img.className = 'card-img-top';
        img.alt = product.modelo;
        img.style.width = '100%';  // Ajustar el tamaño de la imagen

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el título del producto
        const productTitle = document.createElement('h6');
        productTitle.className = 'card-title';
        productTitle.textContent = product.modelo;

        // Crear el precio del producto
        const productPrice = document.createElement('p');
        productPrice.className = 'card-text';
        productPrice.textContent = `Precio: ${product.precio} COP`;

        // Crear el botón de comprar
        const buyButton = document.createElement('button');
        buyButton.className = 'btn btn-primary mt-2 btn-carrito';
        buyButton.textContent = 'Comprar';
        buyButton.setAttribute('data-name', product.modelo);
        buyButton.setAttribute('data-price', product.precio);
        buyButton.setAttribute('data-image', product.imagen);

        // Evento para agregar el producto al carrito
        buyButton.addEventListener('click', () => {
            console.log(`Producto agregado: ${product.modelo}, Precio: ${product.precio}`);
            // Obtener la información del producto
            const name = product.modelo;
            const price = product.precio;
            const image = product.imagen;
                
            // Crear el objeto producto
            const productToSave = { name, price, image };
                
            // Leer el carrito actual del localStorage (o inicializarlo si está vacío)
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
                
            // Agregar el nuevo producto al carrito
            cart.push(productToSave);
                
            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
                
            // Redirigir al carrito
            window.location.href = 'carrito.html';  // Ajusta la ruta si es necesario
        });

        // Añadir los elementos al cuerpo de la tarjeta
        cardBody.appendChild(productTitle);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(buyButton);

        // Añadir la imagen y el cuerpo de la tarjeta a la tarjeta
        card.appendChild(img);
        card.appendChild(cardBody);

        // Añadir la tarjeta a la columna
        colDiv.appendChild(card);

        // Añadir la columna al contenedor de productos
        adidasProductList.appendChild(colDiv); // Cambiado a adidasProductList
    });
})
.catch((error) => {
    console.error(`Error al obtener los productos: ${error}`);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'No se pudo obtener la información de los productos.';
    adidasProductList.appendChild(errorMessage); // Cambiado a adidasProductList
});


// Sección Nike
const nikeProductList = document.getElementById('nike');

const fetchNikePromise = fetch("productos-nike.json");
fetchNikePromise
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    const nikeProducts = data.nike;
    
    nikeProducts.forEach((product) => {
        // Crear un div de columna
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card h-100'; 

        // Crear la imagen
        const img = document.createElement('img');
        img.src = product.imagen;
        img.className = 'card-img-top';
        img.alt = product.modelo;
        img.style.width = '100%';  // Ajustar el tamaño de la imagen

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el título del producto
        const productTitle = document.createElement('h6');
        productTitle.className = 'card-title';
        productTitle.textContent = product.modelo;

        // Crear el precio del producto
        const productPrice = document.createElement('p');
        productPrice.className = 'card-text';
        productPrice.textContent = `Precio: ${product.precio} COP`;

        // Crear el botón de comprar
        const buyButton = document.createElement('button');
        buyButton.className = 'btn btn-primary mt-2 btn-carrito';
        buyButton.textContent = 'Comprar';
        buyButton.setAttribute('data-name', product.modelo);
        buyButton.setAttribute('data-price', product.precio);
        buyButton.setAttribute('data-image', product.imagen);

        // Evento para agregar el producto al carrito
        buyButton.addEventListener('click', () => {
            console.log(`Producto agregado: ${product.modelo}, Precio: ${product.precio}`);
            const name = product.modelo;
            const price = product.precio;
            const image = product.imagen;

            const productToSave = { name, price, image };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(productToSave);
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'carrito.html';  // Ajusta la ruta si es necesario
        });

        // Añadir los elementos al cuerpo de la tarjeta
        cardBody.appendChild(productTitle);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(buyButton);

        // Añadir la imagen y el cuerpo de la tarjeta a la tarjeta
        card.appendChild(img);
        card.appendChild(cardBody);

        // Añadir la tarjeta a la columna
        colDiv.appendChild(card);

        // Añadir la columna al contenedor de productos
        nikeProductList.appendChild(colDiv); // Cambiado a nikeProductList
    });
})
.catch((error) => {
    console.error(`Error al obtener los productos: ${error}`);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'No se pudo obtener la información de los productos.';
    nikeProductList.appendChild(errorMessage); // Cambiado a nikeProductList
});


// Sección New Balance
const newBalanceProductList = document.getElementById('new-balance');

const fetchNewbalancePromise = fetch("productos-nb.json");
fetchNewbalancePromise
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    const newBalanceProducts = data.newBalance;
    
    newBalanceProducts.forEach((product) => {
        // Crear un div de columna
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card h-100'; 

        // Crear la imagen
        const img = document.createElement('img');
        img.src = product.imagen;
        img.className = 'card-img-top';
        img.alt = product.modelo;
        img.style.width = '100%';  // Ajustar el tamaño de la imagen

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el título del producto
        const productTitle = document.createElement('h6');
        productTitle.className = 'card-title';
        productTitle.textContent = product.modelo;

        // Crear el precio del producto
        const productPrice = document.createElement('p');
        productPrice.className = 'card-text';
        productPrice.textContent = `Precio: ${product.precio} COP`;

        // Crear el botón de comprar
        const buyButton = document.createElement('button');
        buyButton.className = 'btn btn-primary mt-2 btn-carrito';
        buyButton.textContent = 'Comprar';
        buyButton.setAttribute('data-name', product.modelo);
        buyButton.setAttribute('data-price', product.precio);
        buyButton.setAttribute('data-image', product.imagen);

        // Evento para agregar el producto al carrito
        buyButton.addEventListener('click', () => {
            console.log(`Producto agregado: ${product.modelo}, Precio: ${product.precio}`);
            const name = product.modelo;
            const price = product.precio;
            const image = product.imagen;

            const productToSave = { name, price, image };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(productToSave);
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'carrito.html';  // Ajusta la ruta si es necesario
        });

        // Añadir los elementos al cuerpo de la tarjeta
        cardBody.appendChild(productTitle);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(buyButton);

        // Añadir la imagen y el cuerpo de la tarjeta a la tarjeta
        card.appendChild(img);
        card.appendChild(cardBody);

        // Añadir la tarjeta a la columna
        colDiv.appendChild(card);

        // Añadir la columna al contenedor de productos
        newBalanceProductList.appendChild(colDiv); // Cambiado a newBalanceProductList
    });
})
.catch((error) => {
    console.error(`Error al obtener los productos: ${error}`);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'No se pudo obtener la información de los productos.';
    newBalanceProductList.appendChild(errorMessage); // Cambiado a newBalanceProductList
});
