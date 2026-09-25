/* =========================
   MENÚ MÓVIL
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Cerrar menú al pulsar un enlace */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   GALERÍA / AMPLIAR IMAGEN
========================= */

const galleryItems = document.querySelectorAll(".gallery-item");

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const modalClose = document.getElementById("modalClose");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.getAttribute("data-image");

        modalImage.src = image;

        imageModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Cerrar modal */

function closeModal() {

    imageModal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

        closeModal();

    }

});


/* Cerrar con ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================
   FORMULARIO
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const servicio =
        document.getElementById("servicio").value;

    const mensaje =
        document.getElementById("mensaje").value.trim();


    const subject =
        encodeURIComponent(
            "Nueva consulta - Reformas Ponce"
        );


    const body =
        encodeURIComponent(
`
Hola, Reformas Ponce.

Me llamo: ${nombre}

Mi teléfono:
${telefono}

Estoy interesado/a en:
${servicio}

Mi proyecto:
${mensaje}

Enviado desde la web de Reformas Ponce.
`
        );


    window.location.href =
        `mailto:reformasponce94@gmail.com?subject=${subject}&body=${body}`;

});


/* =========================
   EFECTO HEADER AL HACER SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.07)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================
   COMPROBACIÓN DE IMÁGENES
========================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("error", () => {

        console.warn(
            "No se ha encontrado esta imagen:",
            image.src
        );

    });

});