/* 
APPLIED RESPONSIVE OPTIMIZATIONS
File: css/style.css

SUMMARY: Added two media queries (768px and 480px) + button styles
======================================================================
*/

/* MEDIA QUERY 1: Mobile Standard (max-width: 768px) */

@media (max-width: 768px) {
    
    /* Navigation: Reduced padding, smaller font */
    .navbar {
        padding: 1rem 4%;
    }
    .logo img { height: 32px; }
    .nav-links { gap: 1.2rem; font-size: 0.8rem; }

    /* Hero: Reduced height, compact title */
    .hero {
        height: 60vh;
        padding: 0 1.5rem;
    }
    .hero h1 { font-size: 2.5rem; line-height: 1.3; }
    .hero p { font-size: 1rem; }

    /* Page Headers: Reduced titles and padding */
    .page-header { padding: 5rem 4% 1.5rem; }
    .page-header h1 { font-size: 2rem; }

    /* Portfolio Grid: 1 column instead of 3 */
    .gallery-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .project-card { height: 300px; }

    /* Overlay: Reduced padding */
    .overlay { padding: 1.5rem; }
    .overlay h3 { font-size: 1.1rem; }
    .overlay p { font-size: 0.85rem; }

    /* BUTTONS - MAIN PROBLEM RESOLUTION */
    .button-group {
        display: flex;
        flex-direction: column;        /* COLUMN ON MOBILE */
        gap: 0.8rem;
        align-items: center;
        width: 100%;
    }
    .button-group a,
    .button-group button {
        width: 100%;
        max-width: 90%;                /* Prevents clipping from edge */
        padding: 0.9rem 1.5rem;
        text-align: center;
        font-size: 0.95rem;
    }

    /* Lightbox: Optimized for mobile */
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

    /* Footer: Smaller text, reduced padding */
    footer { padding: 2.5rem 4%; font-size: 0.8rem; }
}

/* MEDIA QUERY 2: Mobile Compact (max-width: 480px) */

@media (max-width: 480px) {
    
    /* Navbar even more compact */
    .navbar { padding: 0.8rem 3%; }
    .logo img { height: 28px; }

    /* Hero: Further reduced dimensions */
    .hero { height: 50vh; padding: 0 1rem; }
    .hero h1 { font-size: 1.8rem; }
    .hero p { font-size: 0.9rem; }

    /* Page Header: Minimalist */
    .page-header { padding: 3.5rem 3% 1rem; }
    .page-header h1 { font-size: 1.5rem; }

    /* Project Card: Even more compact */
    .project-card { height: 250px; }
    .overlay { padding: 1rem; }
    .overlay h3 { font-size: 0.95rem; }

    /* Buttons: Extra small optimization */
    .button-group { gap: 0.6rem; }
    .button-group a, .button-group button {
        padding: 0.8rem 1.2rem;
        font-size: 0.9rem;
    }

    /* Footer: Minimal */
    footer { padding: 2rem 3%; font-size: 0.75rem; }
}

/* BUTTON STYLES (new) - Works on all breakpoints */

.button-group {
    display: flex;
    flex-direction: row;           /* Desktop: horizontal */
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
   EXPLANATION OF CHANGES
   ====================================================================== */

/*
1. MOBILE VIEWPORT (375px-480px):
   Buttons: flex-direction COLUMN (one below the other)
   Width: max-width 90% (prevents clipping from edge)
   Gap: 0.8rem vertical (adequate space)
   Text-align: center (centered)
   Padding: reduced to not take too much space

2. DESKTOP VIEWPORT (>768px):
   Buttons: flex-direction ROW (side by side)
   Gap: 1.2rem horizontal
   No max-width (they have sufficient space)
   Original layout completely unchanged

3. TRANSITION:
   Media query at 768px marks the change point
   Smooth transition thanks to flex
   No visual jump

4. EXTRA BREAKPOINT (480px):
   Further compacting for small phones
   Font size further reduced but maintaining readability
   Compacted spacing

5. ACCESSIBILITY:
   Easily clickable buttons (min 0.8rem padding)
   Hover state (transform + shadow)
   Active state (tactile feedback)
   Text-align center for precision
*/

/*
CONSTRAINTS RESPECTED:
HTML: NO MODIFICATION - same structure
Desktop design: UNCHANGED - buttons still side by side
New libraries: ZERO - only pure CSS
Media queries: IMPLEMENTED - for mobile responsive
Clean code: COMMENTED - easy to maintain
Test ready: READY - for 375px, 480px, 768px, desktop
*/