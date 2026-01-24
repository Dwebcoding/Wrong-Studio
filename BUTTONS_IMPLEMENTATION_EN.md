<!-- 
GITHUB AND VISIT BUTTONS IMPLEMENTATION - RESPONSIVE READY

This file shows how to integrate GitHub and Visit buttons into the layout
while maintaining perfect responsive design on mobile and desktop.

RECOMMENDED POSITIONING:
- Inside <div class="overlay"> in project-card
- Or inside <div id="caption"> in lightbox

EXAMPLE 1: In project-card overlay (on project click)
-->

<div class="project-card">
    <img src="..." alt="Project" class="gallery-img">
    <div class="overlay">
        <h3>Project Name</h3>
        <p>Category - Year</p>
        
        <!-- BUTTONS - Responsive with CSS -->
        <div class="button-group">
            <a href="https://github.com/..." target="_blank" class="btn-github">GitHub</a>
            <a href="https://..." target="_blank" class="btn-visit">Visit</a>
        </div>
    </div>
</div>

<!-- 
EXAMPLE 2: In lightbox (when clicking to enlarge)
-->

<div id="lightbox" class="lightbox">
    <span class="close">&times;</span>
    <button class="lightbox-nav prev">&#10094;</button>
    <button class="lightbox-nav next">&#10095;</button>
    <img class="lightbox-content" id="lightbox-img">
    <div id="caption">
        <strong>Project Name</strong> - Category - Year
        
        <!-- BUTTONS - Responsive -->
        <div class="button-group">
            <a href="https://github.com/..." target="_blank" class="btn-github">GitHub</a>
            <a href="https://..." target="_blank" class="btn-visit">Visit</a>
        </div>
    </div>
</div>

<!-- 
CSS ADDED TO style.css FILE FOR BUTTONS:
(Already included in mobile media query!)
-->

/*
.button-group {
    display: flex;
    flex-direction: column;    // Column on mobile
    gap: 0.8rem;
    align-items: center;
    width: 100%;
    margin-top: 1.5rem;
}

Desktop (>768px): Buttons remain inline (flex-direction: row)
Mobile (<768px): Buttons go to column (flex-direction: column)

// Base button styles
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

// Mobile (fixes button clipping issue)
@media (max-width: 768px) {
    .button-group {
        flex-direction: column;      // Puts buttons in column
        gap: 0.8rem;
        width: 100%;                 // Fills all space
    }

    .btn-github,
    .btn-visit {
        width: 90%;                  // 90% of width
        max-width: 300px;
        text-align: center;
        padding: 0.9rem 1rem;
    }
}
*/

<!-- 
CURRENT STATE OF MEDIA QUERY (.button-group):

Desktop (>768px): Horizontal flex row, side-by-side buttons, no overflow
Mobile (<768px): Vertical flex column, centered and full-width buttons
Extra small (<480px): Further compressed for 375px viewport

PROBLEM SOLVED:
BEFORE: On mobile buttons were clipped by the edge
NOW: On mobile buttons are centered in column without overflow

NEXT STEP:
Add buttons to HTML using the example structure above.
The responsive CSS will handle everything else!
-->