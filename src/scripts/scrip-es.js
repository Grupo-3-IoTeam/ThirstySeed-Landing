const testimonios = [
    {
        img: 'src/img/client1.png',
        texto: '“La facilidad con la que puedo monitorear y optimizar el riego de mis cultivos es fantástica. El plan Free me dio la confianza para empezar, y ahora, con el plan Premium, estoy experimentando con el riego automatizado. ¡Es una herramienta vital para cualquier agricultor moderno!',
        nombre: 'Valeria Benitez',
        rol: 'Cliente Regular'
    },
    {
        img: 'src/img/client2.PNG',
        texto: '"Gestionar mi sistema de riego nunca ha sido más sencillo. El plan Free fue perfecto para comenzar, y el plan Premium me ha permitido automatizar y gestionar más sensores de manera eficiente. ¡Esta app es esencial para cualquiera que busque mejorar el riego de su granja!',
        nombre: 'James Peterson',
        rol: 'Cliente Regular'
    },
    {
        img: 'src/img/client3.PNG',
        texto: 'He encontrado esta aplicación increíblemente útil para rastrear mi sistema de riego. El plan Free fue un excelente punto de partida, y al actualizarme a Premium, he mejorado la gestión de mi sistema. ¡Es imprescindible para agricultores, tanto nuevos como experimentados!',
        nombre: 'Emily Clark',
        rol: 'Cliente Regular'
    }
   
];

let indiceActual = 0;

function cambiarTestimonial(direccion) {
    const img = document.getElementById('profile-picture');
    const texto = document.getElementById('testimonial-text');
    const nombre = document.getElementById('testimonial-name');
    const rol = document.getElementById('testimonial-role');

    // Animación fade-out
    img.classList.remove('fade-in', 'fade-out');
    texto.classList.remove('fade-in', 'fade-out');
    nombre.classList.remove('fade-in', 'fade-out');
    rol.classList.remove('fade-in', 'fade-out');

    img.classList.add('fade-out');
    texto.classList.add('fade-out');
    nombre.classList.add('fade-out');
    rol.classList.add('fade-out');

    setTimeout(() => {
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

        img.classList.remove('fade-out');
        texto.classList.remove('fade-out');
        nombre.classList.remove('fade-out');
        rol.classList.remove('fade-out');

        img.classList.add('fade-in');
        texto.classList.add('fade-in');
        nombre.classList.add('fade-in');
        rol.classList.add('fade-in');
    }, 250); 
}