let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    if (index >= totalItems) {
        carousel.style.transition = 'none'; // Désactiver la transition pour le réalignement instantané
        currentIndex = 1; // On revient à la deuxième image (la première image réelle)
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out'; // Réactiver la transition
            nextSlide(); // Appeler nextSlide pour continuer à défiler
        }, 0);
    } else if (index < 0) {
        carousel.style.transition = 'none'; // Désactiver la transition pour le réalignement instantané
        currentIndex = totalItems - 2; // On revient à l'avant-dernière image
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out'; // Réactiver la transition
            prevSlide(); // Appeler prevSlide pour continuer à défiler
        }, 0);
    } else {
        currentIndex = index;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.querySelector('.carousel').addEventListener('transitionend', () => {
    if (currentIndex === totalItems - 1) {
        document.querySelector('.carousel').style.transition = 'none';
        currentIndex = 0;
        document.querySelector('.carousel').style.transform = `translateX(0)`;
        setTimeout(() => {
            document.querySelector('.carousel').style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }
});
