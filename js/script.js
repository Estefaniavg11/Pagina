// Función para mostrar productos según la categoría seleccionada
function showProducts(category) {
    // Vaciar la lista de productos
    productsList.innerHTML = '';

    // Crear y agregar productos según la categoría
    switch (category) {
        case 'tequila':
            // Agregar productos de tequila a la lista
            productsList.innerHTML = `
                <div class="product">
                    <!-- Aquí van los productos de tequila -->
                </div>
            `;
            break;
        case 'whisky':
            // Agregar productos de whisky a la lista
            productsList.innerHTML = `
                <div class="product">
                    <!-- Aquí van los productos de whisky -->
                </div>
            `;
            break;
        case 'cerveza':
            // Agregar productos de cerveza a la lista
            productsList.innerHTML = `
                <div class="product">
                    <!-- Aquí van los productos de cerveza -->
                </div>
            `;
            break;
        case 'aguardiente':
            // Agregar productos de aguardiente a la lista
            productsList.innerHTML = `
                <div class="product">
                    <!-- Aquí van los productos de aguardiente -->
                </div>
            `;
            break;
        default:
            // No hacer nada si la categoría no es válida
            break;
    }
}

// Función para seleccionar un producto y hacerlo opaco
function selectProduct(img) {
    // Remover la clase "opaque" de todas las imágenes de categoría
    const allImages = document.querySelectorAll('.category img');
    allImages.forEach(image => {
        image.classList.remove('opaque');
    });

    // Agregar la clase "opaque" a la imagen seleccionada
    img.classList.add('opaque');
}

document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product img');

    products.forEach(product => {
        product.addEventListener('click', function() {
            // Remover la clase "opaque" de todas las imágenes de productos
            products.forEach(product => {
                product.classList.remove('opaque');
            });
            // Agregar la clase "opaque" a la imagen seleccionada
            this.classList.add('opaque');
        });
    });

    // Escuchar clics en las categorías
    categorySelector.addEventListener('click', (event) => {
        if (event.target.classList.contains('category')) {
            // Resaltar la categoría seleccionada
            categorySelector.querySelectorAll('.category').forEach(cat => cat.classList.remove('selected'));
            event.target.classList.add('selected');

            // Mostrar productos de la categoría seleccionada
            const category = event.target.getAttribute('data-category');
            showProducts(category);
        }
    });

    function addToCart() {
        // Lógica para agregar el producto al carrito
        // Puedes implementar aquí la lógica para agregar el producto al carrito de compras
        alert("¡Producto agregado al carrito!");
    } 
});
