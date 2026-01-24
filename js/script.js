document.addEventListener('DOMContentLoaded', () => {
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const lightboxPrev = document.querySelector('.lightbox-nav.prev');
    const lightboxNext = document.querySelector('.lightbox-nav.next');
    
    const projectCards = document.querySelectorAll('.project-card');
    
    // Variabili globali per la lightbox
    let currentImages = [];
    let currentIndex = 0;
    let autoScrollInterval = null;

    // Funzione per aggiornare l'immagine nella lightbox
    function updateLightboxImage() {
        lightboxImg.src = currentImages[currentIndex];
        // Riavvia l'auto-scroll quando cambia immagine manualmente
        restartAutoScroll();
    }

    // Funzione per lo scroll automatico
    function startAutoScroll() {
        if (currentImages.length > 1 && !autoScrollInterval) {
            autoScrollInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % currentImages.length;
                updateLightboxImage();
            }, 4000); // Cambia immagine ogni 4 secondi
        }
    }

    // Funzione per fermare e riavviare lo scroll automatico
    function restartAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
        startAutoScroll();
    }

    // Event Listeners per le frecce della Lightbox (Avanti/Indietro a schermo intero)
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentImages.length > 0) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateLightboxImage();
        }
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentImages.length > 0) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateLightboxImage();
        }
    });

    // Gestione Slider Card (spostato fuori dal loop per evitare errori)
    document.querySelectorAll('.slider-nav').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Impedisce l'apertura della lightbox
            const card = button.closest('.project-card');
            const slider = card.querySelector('.slider-wrapper');
            const scrollAmount = slider.clientWidth;
    
            if (button.classList.contains('next')) {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    });

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 1. Raccoglie TUTTE le immagini della card cliccata
            const imagesElements = card.querySelectorAll('.gallery-img');
            currentImages = Array.from(imagesElements).map(img => img.src);
            
            // 2. Trova l'indice dell'immagine specifica che hai cliccato
            const clickedImg = e.target.closest('.gallery-img');
            if (clickedImg) {
                currentIndex = Array.from(imagesElements).indexOf(clickedImg);
            } else {
                currentIndex = 0;
            }
            if (currentIndex < 0) currentIndex = 0;

            const title = card.querySelector('h3').innerText;
            const desc = card.querySelector('p').innerText;

            // 3. Mostra le frecce grandi solo se c'è più di una foto
            if (currentImages.length > 1) {
                lightboxPrev.style.display = 'block';
                lightboxNext.style.display = 'block';
            } else {
                lightboxPrev.style.display = 'none';
                lightboxNext.style.display = 'none';
            }

            lightbox.style.display = "block";
            updateLightboxImage();
            captionText.innerHTML = `<strong>${title}</strong> - ${desc}`;
            
            // Avvia lo scroll automatico
            startAutoScroll();
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = "none";
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    });
});
