// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeHeader();
    initializeContactForm();
    initializeStructuredData();
    updateCurrentYear();
    
    // Smooth scrolling for all internal links
    initializeSmoothScrolling();
});

// Header scroll effect
function initializeHeader() {
    const header = document.getElementById('header');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showToast('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    submitForm(data);
}

function submitForm(data) {
    // In a real application, you would send this data to your server
    console.log('Form data:', data);
    
    // Simulate API call delay
    setTimeout(() => {
        // Show success message
        showToast('Message Sent!', 'success', 'Thank you for your inquiry. We\'ll get back to you within 24 hours.');
        
        // Reset form
        document.getElementById('contactForm').reset();
    }, 1000);
}

// Toast notification system
function showToast(title, type = 'success', message = '') {
    const toast = document.getElementById('toast');
    const toastContent = toast.querySelector('.toast-content');
    
    // Update content
    toastContent.innerHTML = `
        <strong>${title}</strong>
        ${message ? `<p>${message}</p>` : ''}
    `;
    
    // Update styling based on type
    if (type === 'error') {
        toast.style.backgroundColor = 'hsl(0, 84.2%, 60.2%)';
    } else {
        toast.style.backgroundColor = 'var(--primary)';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Add structured data for SEO
function initializeStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nakshavedi Technology Services Pvt. Ltd.",
        "description": "Professional CAD drafting, BIM services, and engineering solutions",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
        },
        "serviceArea": "Global",
        "email": "info@nakshavedi.com",
        "services": [
            "CAD Drafting & Detailing",
            "Revit Architecture & BIM",
            "HVAC & MEP Services",
            "Structural Engineering",
            "GIS Drafting Services",
            "CAFM Solutions"
        ]
    };
    
    // Check if script already exists
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
}

// Update current year in footer
function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Intersection Observer for animations (optional enhancement)
function initializeAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.service-card, .stat-card, .info-card');
        animateElements.forEach(el => observer.observe(el));
    }
}

// Call animation initialization after DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: debounce scroll event
const debouncedScrollHandler = debounce(() => {
    // Handle any scroll-dependent updates here
    console.log('Scroll event handled');
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Handle responsive navigation (if mobile menu is added later)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        showToast,
        initializeAnimations
    };
}