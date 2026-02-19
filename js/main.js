document.addEventListener('DOMContentLoaded', () => {
    // Gestione Menu Burger
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Funzione per animare gli elementi quando entrano nel viewport (usata per le skill card)
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Triggera quando il 20% dell'elemento è visibile
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                // Se vuoi che l'animazione parta una sola volta, decommenta la riga seguente
                // observer.unobserve(entry.target);
            } else {
                // Per farla ripartire quando l'elemento esce ed entra di nuovo
                entry.target.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(element => {
        element.style.animationPlayState = 'paused'; // Inizia in pausa
        observer.observe(element);
    });
});

