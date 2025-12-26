// Global variables
let isLoaded = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    // Hide loader after page loads
    hideLoader();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize portfolio filtering
    initializePortfolioFilter();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize skill bars animation
    initializeSkillBars();
    
    isLoaded = true;
}

// Loader functionality
function hideLoader() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
}

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active navigation link
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Skip hero section as it has custom animations
        if (section.id !== 'home') {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });
    
    // Animate cards and items (non-contact)
    const cards = document.querySelectorAll('.timeline-item, .portfolio-item, .interest-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        observer.observe(card);
    });
    
    // Animate contact items together (no stagger)
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(item);
    });
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.setProperty('--progress-width', width);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.classList.add('animate');
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }, index * 100);
    });
}

// Portfolio filtering
function initializePortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.classList.add('hide');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Validate form
        if (validateForm(data)) {
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showNotification('Please fill in all fields correctly.', 'error');
        }
    });
}

// Form validation
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return data.name.trim() !== '' &&
           emailRegex.test(data.email) &&
           data.subject.trim() !== '' &&
           data.message.trim() !== '';
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Floating elements animation
    animateFloatingElements();
}

// Animate floating elements in hero section
function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        let startDelay = index * 1000;
        
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            
            element.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                element.style.transform = 'translate(0, 0)';
            }, 2000);
        }, 4000 + startDelay);
    });
}

// Typing effect for hero title
function initializeTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const text = 'DEEPAK NELSON';
    const speed = 100;
    let i = 0;
    
    typingText.textContent = '';
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    setTimeout(typeWriter, 1500);
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    initializeTypingEffect();
});

// Smooth scroll for all anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Add loading animation to buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        const btn = e.target;
        btn.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
});

// Lazy loading for images (if you add real images later)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

// Add ripple effect to all buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        createRipple(e);
    }
});

// Note: Portfolio modal functionality has been moved to portfolio-modal.js
// This keeps the main script focused on core website functionality

// --- Custom: Intercept Playstore button clicks for unavailable games ---
document.addEventListener('DOMContentLoaded', function() {
    // List of available games (data-project attribute values)
    const availableGames = [
        'deliver3d',
        'lets-deliver',
        'battle-of-apes',
        'find-match-3d',
        'botster-brawl',
        'candy-world-sol',
        'cat-wool'
    ];

    // Attach click listeners to all portfolio Playstore links
    document.querySelectorAll('.portfolio-link').forEach(link => {
        // Find the parent .portfolio-item to get the data-project
        const portfolioItem = link.closest('.portfolio-item');
        if (!portfolioItem) return;
        const project = portfolioItem.getAttribute('data-project');

        // Intercept if NOT in available list, or if Botster Brawl (special WIP message)
        if (!availableGames.includes(project)) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showNotification('This game is currently unavailable on the Play Store. Please check back soon!', 'error');
                return false;
            });
            // Optionally, visually disable the link
            link.classList.add('disabled');
            link.style.pointerEvents = 'auto'; // allow our handler
            link.style.opacity = '0.6';
        } else if (project === 'botster-brawl') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showNotification('Botster Brawl is a Work In Progress. Stay tuned!', 'error');
                return false;
            });
            link.classList.add('disabled');
            link.style.pointerEvents = 'auto';
            link.style.opacity = '0.6';
        }
    });
});