function checkVisibility() {
    const elements = document.querySelectorAll('.text');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;

        if (scrollTop + windowHeight > elementTop) {
            element.classList.add('visible');
        }
    });
}

// Appel de la fonction lors du chargement de la page
window.addEventListener('load', checkVisibility);

// Appel de la fonction lors du défilement
window.addEventListener('scroll', checkVisibility);
