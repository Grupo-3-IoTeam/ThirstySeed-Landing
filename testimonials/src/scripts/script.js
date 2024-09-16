//falta resolver el error de testimonials
const testimonios = [
    {
        img: 'src/img/client1.png',
        texto: '“The ease with which I can grow and care for my favorite plants is incredible. The Free plan helped me get started, and now, with the Premium plan, Im experimenting with more challenging species. Its an essential tool for any plant lover!',
        nombre: 'Valeria Benitez',
        rol: 'Regular Customer'
    },
    {
        img: 'src/img/client2.png',
        texto: '"Managing my plants has never been easier. The Free plan gave me a solid start, and with the Premium plan, Ive been able to expand my collection and explore new plant species. This app is a must-have for any plant enthusiast!',
        nombre: 'James Peterson',
        rol: 'Regular Customer'
    },
    {
        img: 'src/img/client3.png',
        texto: 'Ive found this app to be incredibly helpful in keeping track of my plant care routine. Starting with the Free plan was great, and upgrading to Premium has allowed me to dive deeper into plant care. Its a fantastic tool for both beginners and experienced gardeners!"',
        nombre: 'Emily Clark',
        rol: 'Regular Customer'
    }
];

let indiceActual = 0;

function cambiarTestimonial(direccion) {
    const img = document.getElementById('profile-picture');
    const texto = document.getElementById('testimonial-text');
    const nombre = document.getElementById('testimonial-name');
    const rol = document.getElementById('testimonial-role');

    img.classList.remove('fade-in', 'fade-out');
    texto.classList.remove('fade-in', 'fade-out');
    nombre.classList.remove('fade-in', 'fade-out');
    rol.classList.remove('fade-in', 'fade-out');

    img.classList.add('fade-out');
    texto.classList.add('fade-out');
    nombre.classList.add('fade-out');
    rol.classList.add('fade-out');

    setTimeout(() => {
        // Cambiar el contenido
        indiceActual += direccion;

        if (indiceActual < 0) {
            indiceActual = testimonios.length - 1;
        } else if (indiceActual >= testimonios.length) {
            indiceActual = 0;
        }

        img.src = testimonios[indiceActual].img;
        texto.textContent = testimonios[indiceActual].texto;
        nombre.textContent = testimonios[indiceActual].nombre;
        rol.textContent = testimonios[indiceActual].rol;

        // Eliminar las clases de fade-out para reiniciar la animación
        img.classList.remove('fade-out');
        texto.classList.remove('fade-out');
        nombre.classList.remove('fade-out');
        rol.classList.remove('fade-out');

        // Aplicar la clase fade-in para iniciar la animación de entrada
        img.classList.add('fade-in');
        texto.classList.add('fade-in');
        nombre.classList.add('fade-in');
        rol.classList.add('fade-in');
    }, 250); // Tiempo de espera para la transición
}
