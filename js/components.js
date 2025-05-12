// Function to include HTML components
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(element => {
        const file = element.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                // If the included file is the navigation component, initialize the mobile menu
                if (file.includes('nav.html')) {
                    initializeMobileMenu();
                }
            })
            .catch(error => console.error('Error including component:', error));
    });
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle menu visibility
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
            
            // Toggle hamburger icon
            const icon = mobileMenuButton.querySelector('svg');
            if (isExpanded) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            }
        });
    }
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', includeHTML); 