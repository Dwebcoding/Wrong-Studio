// navbar.js
// Inserisce la navbar in tutte le pagine automaticamente

function loadNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="logo">
                <a href="/index.html"><img src="/assets/logo/Logo Black.png" alt="Wrong Studio Logo"></a>
            </div>
            <ul class="nav-links">
                <li><a href="/pages/works.html">Works</a></li>
                <li><a href="/pages/about.html">About</a></li>
                <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
        </nav>`;
    
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }
}

document.addEventListener('DOMContentLoaded', loadNavbar);