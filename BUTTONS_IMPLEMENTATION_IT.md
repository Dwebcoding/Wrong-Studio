<!-- 
IMPLEMENTAZIONE BOTTONI GITHUB E VISITA - RESPONSIVE READY

Questo file mostra come integrare i bottoni GitHub e Visita nel layout
mantenendo il responsive design perfetto su mobile e desktop.

POSIZIONAMENTO CONSIGLIATO:
- Dentro <div class="overlay"> nel project-card
- O dentro <div id="caption"> nella lightbox

ESEMPIO 1: Nel project-card overlay (al click del progetto)
-->

<div class="project-card">
    <img src="..." alt="Progetto" class="gallery-img">
    <div class="overlay">
        <h3>Nome Progetto</h3>
        <p>Categoria - Anno</p>
        
        <!-- BOTTONI - Responsive con CSS -->
        <div class="button-group">
            <a href="https://github.com/..." target="_blank" class="btn-github">GitHub</a>
            <a href="https://..." target="_blank" class="btn-visit">Visita</a>
        </div>
    </div>
</div>

<!-- 
ESEMPIO 2: Nella lightbox (quando si clicca per ingrandire)
-->

<div id="lightbox" class="lightbox">
    <span class="close">&times;</span>
    <button class="lightbox-nav prev">&#10094;</button>
    <button class="lightbox-nav next">&#10095;</button>
    <img class="lightbox-content" id="lightbox-img">
    <div id="caption">
        <strong>Nome Progetto</strong> - Categoria - Anno
        
        <!-- BOTTONI - Responsive -->
        <div class="button-group">
            <a href="https://github.com/..." target="_blank" class="btn-github">GitHub</a>
            <a href="https://..." target="_blank" class="btn-visit">Visita</a>
        </div>
    </div>
</div>

<!-- 
CSS AGGIUNTO AL file style.css PER I BOTTONI:
(Già incluso nella media query mobile!)
-->

/*
.button-group {
    display: flex;
    flex-direction: column;    // Colonna su mobile
    gap: 0.8rem;
    align-items: center;
    width: 100%;
    margin-top: 1.5rem;
}

Desktop (>768px): I bottoni rimangono inline (flex-direction: row)
Mobile (<768px): I bottoni vanno in colonna (flex-direction: column)

// Stili base per i bottoni
.btn-github,
.btn-visit {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    text-decoration: none;
    border-radius: 3px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-github:hover {
    background: #fff;
    transform: translateY(-2px);
}

.btn-visit {
    background: rgba(255, 255, 255, 0.7);
    color: #000;
}

.btn-visit:hover {
    background: #fff;
    transform: translateY(-2px);
}

// Mobile (risolve il problema dei bottoni tagliati)
@media (max-width: 768px) {
    .button-group {
        flex-direction: column;      // Mette i bottoni in colonna
        gap: 0.8rem;
        width: 100%;                 // Riempie tutto lo spazio
    }

    .btn-github,
    .btn-visit {
        width: 90%;                  // 90% della larghezza
        max-width: 300px;
        text-align: center;
        padding: 0.9rem 1rem;
    }
}
*/

<!-- 
STATO ATTUALE DELLA MEDIA QUERY (.button-group):

Desktop (>768px): Flex row orizzontale, bottoni affiancati, no overflow
Mobile (<768px): Flex column verticale, bottoni centrati e full-width
Extra small (<480px): Ulteriormente compresso per 375px viewport

PROBLEMA RISOLTO:
PRIMA: Su mobile i bottoni erano tagliati dal bordo
ADESSO: Su mobile i bottoni sono centrati in colonna senza overflow

PROSSIMO STEP:
Aggiungi i bottoni nel HTML usando la struttura di esempio sopra.
Il CSS responsive farà tutto il resto!
-->