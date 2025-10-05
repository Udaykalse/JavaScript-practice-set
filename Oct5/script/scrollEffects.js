// Enhanced scroll effects and animations
class ScrollEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupParallax();
        this.setupScrollAnimations();
        this.setupProgressBars();
        this.setupLazyLoading();
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', utils.throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translate3d(0, ${rate}px, 0)`;
            });
        }, 16));
    }

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.scroll-animate');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    this.animateValue(entry.target);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    animateValue(element) {
        if (element.classList.contains('counter')) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        }
    }

    setupProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const width = progress.getAttribute('data-progress');
                    progress.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }

    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const lazyBackgrounds = document.querySelectorAll('[data-bg]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const backgroundObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.backgroundImage = `url(${element.getAttribute('data-bg')})`;
                    backgroundObserver.unobserve(element);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
        lazyBackgrounds.forEach(bg => backgroundObserver.observe(bg));
    }
}

// Initialize scroll effects
document.addEventListener('DOMContentLoaded', () => {
    new ScrollEffects();
});