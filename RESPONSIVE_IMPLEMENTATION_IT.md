/* 
OTTIMIZZAZIONI RESPONSIVE APPLICATE
File: css/style.css

SUMMARY: Aggiunte due media query (768px e 480px) + stili bottoni
======================================================================
*/

/* MEDIA QUERY 1: Mobile Standard (max-width: 768px) */

@media (max-width: 768px) {
    
    /* Navigazione: Padding ridotto, font più piccolo */
    .navbar {
        padding: 1rem 4%;
    }
    .logo img { height: 32px; }
    .nav-links { gap: 1.2rem; font-size: 0.8rem; }

    /* Hero: Altezza ridotta, titolo compatto */
    .hero {
        height: 60vh;
        padding: 0 1.5rem;
    }
    .hero h1 { font-size: 2.5rem; line-height: 1.3; }
    .hero p { font-size: 1rem; }

    /* Page Headers: Titoli e padding ridotti */
    .page-header { padding: 5rem 4% 1.5rem; }
    .page-header h1 { font-size: 2rem; }

    /* Portfolio Grid: 1 colonna invece di 3 */
    .gallery-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .project-card { height: 300px; }

    /* Overlay: Padding ridotto */
    .overlay { padding: 1.5rem; }
    .overlay h3 { font-size: 1.1rem; }
    .overlay p { font-size: 0.85rem; }

    /* BOTTONI - RISOLUZIONE PROBLEMA PRINCIPALE */
    .button-group {
        display: flex;
        flex-direction: column;        /* COLONNA SU MOBILE */
        gap: 0.8rem;
        align-items: center;
        width: 100%;
    }
    .button-group a,
    .button-group button {
        width: 100%;
        max-width: 90%;                /* Evita il taglio dal bordo */
        padding: 0.9rem 1.5rem;
        text-align: center;
        font-size: 0.95rem;
    }

    /* Lightbox: Ottimizzato per mobile */
    .lightbox { padding-top: 40px; }
    .lightbox-content { width: 90%; max-height: 70vh; }
    #caption { width: 90%; font-size: 0.9rem; }
    .close { top: 20px; right: 20px; font-size: 30px; }
    .lightbox-nav { font-size: 2rem; padding: 0 0.8rem; }

    /* About Section: Flex full-width */
    .about-container { gap: 2rem; }
    .about-image, .about-text { flex: 1 1 100%; }
    .about-text h2 { font-size: 1.5rem; }

    /* Contact: Layout stacked */
    .contact-container { gap: 2rem; }
    .contact-info, .contact-form-container { flex: 1 1 100%; }
    .btn-submit { width: 100%; padding: 1rem; }

    /* Footer: Testo più piccolo, padding ridotto */
    footer { padding: 2.5rem 4%; font-size: 0.8rem; }
}

/* MEDIA QUERY 2: Mobile Compatto (max-width: 480px) */

@media (max-width: 480px) {
    
    /* Navbar ancora più compatto */
    .navbar { padding: 0.8rem 3%; }
    .logo img { height: 28px; }

    /* Hero: Dimensioni ulteriormente ridotte */
    .hero { height: 50vh; padding: 0 1rem; }
    .hero h1 { font-size: 1.8rem; }
    .hero p { font-size: 0.9rem; }

    /* Page Header: Minimalista */
    .page-header { padding: 3.5rem 3% 1rem; }
    .page-header h1 { font-size: 1.5rem; }

    /* Project Card: Ancora più compatto */
    .project-card { height: 250px; }
    .overlay { padding: 1rem; }
    .overlay h3 { font-size: 0.95rem; }

    /* Bottoni: Extra small optimization */
    .button-group { gap: 0.6rem; }
    .button-group a, .button-group button {
        padding: 0.8rem 1.2rem;
        font-size: 0.9rem;
    }

    /* Footer: Minimal */
    footer { padding: 2rem 3%; font-size: 0.75rem; }
}

/* BUTTON STYLES (nuovo) - Funziona su tutti i breakpoint */

.button-group {
    display: flex;
    flex-direction: row;           /* Desktop: orizzontale */
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.btn-github, .btn-visit {
    display: inline-block;
    padding: 0.85rem 1.8rem;
    background: rgba(255, 255, 255, 0.95);
    color: #1a1a1a;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-github:hover, .btn-visit:hover {
    background: #fff;
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.btn-github:active, .btn-visit:active {
    transform: translateY(-1px);
}

/* ======================================================================
   SPIEGAZIONE DEI CAMBIAMENTI
   ====================================================================== */

/*
1. VIEWPORT MOBILE (375px-480px):
   Bottoni: flex-direction COLUMN (uno sotto l'altro)
   Width: max-width 90% (evita taglio dal bordo)
   Gap: 0.8rem verticale (spazio adeguato)
   Text-align: center (centrato)
   Padding: ridotto per non occupare troppo spazio

2. VIEWPORT DESKTOP (>768px):
   Bottoni: flex-direction ROW (affiancati)
   Gap: 1.2rem orizzontale
   Nessun max-width (hanno spazio sufficiente)
   Layout originale completamente invariato

3. TRANSIZIONE:
   Media query a 768px marca il punto di cambio
   Transizione fluida grazie a flex
   Nessun jump visivo

4. EXTRA BREAKPOINT (480px):
   Ulteriore compattamento per phone piccolini
   Font size ancora ridotto ma mantenendo leggibilità
   Spacing compattato

5. ACCESSIBILITY:
   Bottoni facilmente cliccabili (min 0.8rem padding)
   Hover state (transform + shadow)
   Active state (feedback tattile)
   Text-align center per precisione
*/

/*
VINCOLI RISPETTATI:
HTML: NESSUNA MODIFICA - stessa struttura
Design desktop: INVARIATO - bottoni ancora affiancati
Librerie nuove: ZERO - solo CSS puro
Media queries: IMPLEMENTATE - per mobile responsive
Codice pulito: COMMENTATO - facile da mantenere
Test ready: PRONTO - per 375px, 480px, 768px, desktop
*/