// Obtener la barra de navegación
const navbar = document.querySelector('.list-nav-bar');

// Función para manejar el evento de scroll
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Agregar un listener al evento scroll
window.addEventListener('scroll', handleScroll);