// ===== MAIN JAVASCRIPT FILE =====

// DOM Elements
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');

// ===== MOBILE MENU TOGGLE =====
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Get animation type from data attribute or default
            const animationType = element.dataset.animation || 'fade-in-up';
            element.classList.add(`animate-${animationType}`);
            
            // Add stagger delay for grid items
            const staggerIndex = element.dataset.stagger;
            if (staggerIndex) {
                element.classList.add(`animate-stagger-${staggerIndex}`);
            }
            
            // Mark as animated to prevent re-animation
            element.dataset.animated = 'true';
        }
    });
}, observerOptions);

// Enhanced animation system
function initializeAnimations() {
    // Hero section animations
    const heroTitle = document.querySelector('.hero__title');
    const heroDescription = document.querySelector('.hero__description');
    const heroButtons = document.querySelector('.hero__buttons');
    const heroImage = document.querySelector('.hero__image');
    
    if (heroTitle) {
        heroTitle.classList.add('animate-on-scroll');
        setTimeout(() => heroTitle.classList.add('animated'), 300);
    }
    if (heroDescription) {
        heroDescription.classList.add('animate-on-scroll');
        setTimeout(() => heroDescription.classList.add('animated'), 500);
    }
    if (heroButtons) {
        heroButtons.classList.add('animate-on-scroll');
        setTimeout(() => heroButtons.classList.add('animated'), 700);
    }
    if (heroImage) {
        heroImage.classList.add('animate-on-scroll');
        setTimeout(() => heroImage.classList.add('animated'), 900);
    }
    
    // Feature cards with stagger
    const featureCards = document.querySelectorAll('.feature__card');
    featureCards.forEach((card, index) => {
        card.dataset.animation = 'fade-in-up';
        card.dataset.stagger = (index + 1).toString();
        observer.observe(card);
    });
    
    // Benefit cards with scale animation
    const benefitCards = document.querySelectorAll('.benefit__card');
    benefitCards.forEach((card, index) => {
        card.dataset.animation = 'scale-in';
        card.dataset.stagger = (index + 1).toString();
        observer.observe(card);
    });
    
    // Testimonial cards with slide animation
    const testimonialCards = document.querySelectorAll('.testimonial__card');
    testimonialCards.forEach((card, index) => {
        card.dataset.animation = 'slide-in-up';
        card.dataset.stagger = (index + 1).toString();
        observer.observe(card);
    });
    
    // Pricing card with bounce animation
    const pricingCard = document.querySelector('.pricing__card');
    if (pricingCard) {
        pricingCard.dataset.animation = 'bounce-in';
        observer.observe(pricingCard);
    }
    
    // Section headers
    const sectionHeaders = document.querySelectorAll('.section__header');
    sectionHeaders.forEach(header => {
        header.dataset.animation = 'fade-in-up';
        observer.observe(header);
    });
    
    // Demo section with left/right animations
    const demoText = document.querySelector('.demo__text');
    const demoImage = document.querySelector('.demo .hero__image');
    if (demoText) {
        demoText.dataset.animation = 'fade-in-left';
        observer.observe(demoText);
    }
    if (demoImage) {
        demoImage.dataset.animation = 'fade-in-right';
        observer.observe(demoImage);
    }
    
    // Access message with scale animation
    const accessMessage = document.querySelector('.access-message__content');
    if (accessMessage) {
        accessMessage.dataset.animation = 'scale-in';
        observer.observe(accessMessage);
    }
    
    // Contact form with slide animation
    const contactForm = document.querySelector('.contact-form__form');
    if (contactForm) {
        contactForm.dataset.animation = 'slide-in-up';
        observer.observe(contactForm);
    }
}

// ===== FORM HANDLING =====
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data['bar-name'] || !data['contact-name'] || !data.email || !data.phone) {
        showNotification('Per favore compila tutti i campi richiesti.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Per favore inserisci un indirizzo email valido.', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Per favore inserisci un numero di telefono valido.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Invio in corso...';
    submitButton.disabled = true;
    
    // Submit to Formspree
    fetch(event.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showNotification('Richiesta inviata con successo! Ti invieremo le credenziali via email.', 'success');
    event.target.reset();
            trackEvent('form_submitted', {
                form_type: 'contact_form',
                bar_name: data['bar-name']
            });
        } else {
            throw new Error('Errore nell\'invio');
        }
    })
    .catch(error => {
        console.error('Form submission error:', error);
        showNotification('Errore nell\'invio. Riprova più tardi o contattaci direttamente.', 'error');
    })
    .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== LAZY LOADING FOR IMAGES =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== SCROLL TO TOP BUTTON =====
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
    `;
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Scroll to top functionality
    scrollButton.addEventListener('click', () => {
        const startPosition = window.pageYOffset;
        const duration = 800;
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, -startPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
        
        requestAnimationFrame(animation);
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
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

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Header scroll effect is handled above
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== ANALYTICS TRACKING =====
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Custom tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track CTA clicks
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn--primary')) {
        const href = e.target.getAttribute('href');
        const isFormCTA = href === '#contact-form';
        
        trackEvent('cta_click', {
            button_text: e.target.textContent,
            page_section: e.target.closest('section')?.id || 'unknown',
            target: isFormCTA ? 'contact_form' : 'other'
        });
        
        // Smooth scroll to form if it's a form CTA
        if (isFormCTA) {
            e.preventDefault();
            const formSection = document.querySelector('#contact-form');
            if (formSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = formSection.offsetTop - headerHeight;
                
                // Enhanced smooth scroll with easing
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                function easeInOutCubic(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                }
                
                requestAnimationFrame(animation);
                
                // Highlight the form after scrolling
                setTimeout(() => {
                    const form = document.querySelector('.contact-form__form');
                    if (form) {
                        form.classList.add('highlight');
                        setTimeout(() => {
                            form.classList.remove('highlight');
                        }, 2000);
                    }
                }, 1200);
            }
        }
    }
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
function improveAccessibility() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Salta al contenuto principale';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    lazyLoadImages();
    createScrollToTopButton();
    improveAccessibility();
    initializeAnimations();
    
    // Add form event listeners
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactForm);
        
        // Add real-time validation feedback
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    });
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    console.log('Invory website loaded successfully!');
});

// ===== FORM VALIDATION =====
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Remove existing error states
    field.classList.remove('error', 'valid');
    
    // Validate based on field type
    if (field.hasAttribute('required') && !value) {
        field.classList.add('error');
        return false;
    }
    
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
            field.classList.add('error');
            return false;
        }
    }
    
    if (value) {
        field.classList.add('valid');
    }
    
    return true;
}

// ===== CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification__close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
    }
    
    .scroll-to-top:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style); 