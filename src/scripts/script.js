const testimonios = [
    {
        img: 'src/img/client1.png',
        texto: '“The ease with which I can monitor and optimize irrigation for my crops is fantastic. The Free plan gave me the confidence to start, and now, with the Premium plan, I am experimenting with automated irrigation. It’s a vital tool for any modern farmer!',
        nombre: 'Valeria Benitez',
        rol: 'Regular Customer'
    },
    {
        img: 'src/img/client2.png',
        texto: '"Managing my irrigation system has never been simpler. The Free plan was perfect for starting out, and the Premium plan has allowed me to automate and manage more sensors efficiently. This app is essential for anyone looking to improve their farm’s irrigation!',
        nombre: 'James Peterson',
        rol: 'Regular Customer'
    },
    {
        img: 'src/img/client3.png',
        texto: 'I’ve found this app incredibly helpful in tracking my irrigation. The Free plan was a great entry point, and upgrading to Premium has enhanced my system management. It’s a must-have for farmers, whether new or experienced!',
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
