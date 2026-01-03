// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeHeader();
    initializeContactForm();
    initializeStructuredData();
    updateCurrentYear();
    
    // Smooth scrolling for all internal links
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize form accessibility
    addFormAccessibility();
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
    
    // Show loading state
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Show success message
        showToast('Message Sent!', 'success', 'Thank you for your inquiry. We\'ll get back to you within 24 hours.');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
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

// Intersection Observer for animations
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
                    
                    // Add staggered animation for service cards
                    if (entry.target.classList.contains('service-card')) {
                        const cards = document.querySelectorAll('.service-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, index * 100);
                        });
                    }
                    
                    // Add counter animation for stat cards
                    if (entry.target.classList.contains('stat-card')) {
                        animateCounter(entry.target.querySelector('.stat-number'));
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.service-card, .stat-card, .info-card');
        animateElements.forEach(el => {
            // Set initial state for service cards
            if (el.classList.contains('service-card')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
            observer.observe(el);
        });
    }
}

// Animate counter numbers
function animateCounter(element) {
    return;
    if (!element || element.dataset.animated) return;
    
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const numericValue = parseInt(target.replace(/\D/g, ''));
    
    let current = 0;
    const increment = numericValue / 30; // 30 steps
    const duration = 1500; // 1.5 seconds
    const stepTime = duration / 30;
    
    element.dataset.animated = 'true';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (isPercentage && isPlus) {
            element.textContent = displayValue + '-' + Math.floor(displayValue * 1.16) + '%';
        } else if (isPlus) {
            element.textContent = displayValue + '+';
        } else if (isPercentage) {
            element.textContent = displayValue + '%';
        } else {
            element.textContent = displayValue;
        }
    }, stepTime);
}

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

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Handle Escape key to close any open modals/menus
    if (e.key === 'Escape') {
        const toast = document.getElementById('toast');
        if (toast.classList.contains('show')) {
            toast.classList.remove('show');
        }
    }
    
    // Handle Enter key on nav buttons
    if (e.key === 'Enter' && e.target.classList.contains('nav-link')) {
        e.target.click();
    }
});

// Form accessibility improvements
function addFormAccessibility() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        // Add aria-required for required fields
        if (input.hasAttribute('required')) {
            input.setAttribute('aria-required', 'true');
        }
        
        // Add aria-describedby for validation messages
        input.addEventListener('invalid', function(e) {
            const errorId = this.id + '-error';
            let errorMsg = this.parentNode.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.id = errorId;
                errorMsg.style.color = 'hsl(0, 84.2%, 60.2%)';
                errorMsg.style.fontSize = '0.875rem';
                errorMsg.style.marginTop = '0.25rem';
                this.parentNode.appendChild(errorMsg);
            }
            
            errorMsg.textContent = this.validationMessage;
            this.setAttribute('aria-describedby', errorId);
            this.style.borderColor = 'hsl(0, 84.2%, 60.2%)';
        });
        
        input.addEventListener('input', function() {
            if (this.validity.valid) {
                const errorMsg = this.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
                this.removeAttribute('aria-describedby');
                this.style.borderColor = '';
            }
        });
    });
}

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        showToast,
        initializeAnimations,
        animateCounter
    };
}
