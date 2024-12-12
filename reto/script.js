
// JavaScript para alternar el menú

document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
})
const menuBoton = document.querySelector('.menu-boton');
const menu = document.querySelector('.menu');

menuBoton.addEventListener('click', () => {
    menu.classList.toggle('activo'); // Activa o desactiva la clase "activo"
});

    // Cierra el menú si haces clic fuera de él

window.addEventListener ('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.classList.remove('activo');
    }
});

 // Muestra/oculta el submenú al hacer clic
 document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // Evita que se recargue la página
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });


// Almacena los productos seleccionados en localStorage
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} se añadió al carrito`);
}

// Cargar el carrito en cart.html
if (window.location.pathname.includes('cart.html')) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    const totalContainer = document.getElementById('total');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const productElement = document.createElement('p');
            productElement.textContent = `${item.productName} - $${item.price}`;
            cartContainer.appendChild(productElement);
            total += item.price;
        });
        totalContainer.textContent = total;
    }
}
