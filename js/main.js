// Handle pricing toggle between monthly and annual
document.addEventListener('DOMContentLoaded', function() {
    const monthlyBtn = document.querySelector('button:contains("Monthly")');
    const annualBtn = document.querySelector('button:contains("Annual")');
    
    if (monthlyBtn && annualBtn) {
        monthlyBtn.addEventListener('click', function() {
            this.classList.add('bg-primary', 'text-white');
            annualBtn.classList.remove('bg-primary', 'text-white');
        });

        annualBtn.addEventListener('click', function() {
            this.classList.add('bg-primary', 'text-white');
            monthlyBtn.classList.remove('bg-primary', 'text-white');
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 