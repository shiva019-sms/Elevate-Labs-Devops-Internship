// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Installation tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Examples tabs
const exampleButtons = document.querySelectorAll('.example-btn');
const exampleContents = document.querySelectorAll('.example-content');

exampleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetExample = button.getAttribute('data-example');
        
        // Remove active class from all buttons and contents
        exampleButtons.forEach(btn => btn.classList.remove('active'));
        exampleContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetExample).classList.add('active');
    });
});

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy code');
    });
}

// Copy command functionality
function copyCommand(button, command) {
    navigator.clipboard.writeText(command).then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy command');
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.intro-card, .command-category, .instruction-card, .practice-card, .step, .comparison-item'
    );
    
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroAnimation = document.querySelector('.hero-animation');
    
    if (heroContent && heroAnimation && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add interactive hover effect for command items
document.querySelectorAll('.command-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Enhanced scroll to top on logo click
document.querySelector('.nav-brand').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add active state to sections as they come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// Print console welcome message
console.log('%c🐳 Welcome to Docker Tutorial! ', 'background: #2496ed; color: white; font-size: 20px; padding: 10px;');
console.log('%cLearn Docker from basics to advanced! 🚀', 'color: #2496ed; font-size: 14px;');

// Add tooltip functionality (optional enhancement)
const addTooltips = () => {
    const commands = document.querySelectorAll('.command-item code');
    commands.forEach(cmd => {
        cmd.setAttribute('title', 'Click copy button to copy this command');
    });
};

addTooltips();

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll-heavy operations
const optimizedScroll = debounce(() => {
    // Any heavy scroll operations can go here
}, 100);

window.addEventListener('scroll', optimizedScroll);

// Add dynamic year to footer
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}

// Track page visibility for analytics (optional)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('User left the page');
    } else {
        console.log('User returned to the page');
    }
});

// Add search functionality (bonus feature)
const addSearchFunctionality = () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const commandItems = document.querySelectorAll('.command-item');
            
            commandItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
};

// Initialize all interactive features
document.addEventListener('DOMContentLoaded', () => {
    console.log('Docker Tutorial loaded successfully! ✅');
    addSearchFunctionality();
    
    // Add smooth reveal animation to all sections
    const revealSections = document.querySelectorAll('.section');
    revealSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});