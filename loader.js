
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        preloader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000);
});
