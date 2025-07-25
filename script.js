document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 100);
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada! Obrigado pelo contato.');
            form.reset();
        });
    }
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

document.addEventListener('DOMContentLoaded', revealOnScroll); 