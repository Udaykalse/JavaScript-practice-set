// Main Application Script
class StudySmartApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
        this.loadDynamicContent();
        this.handleLoadingScreen();
    }

    setupEventListeners() {
        // Navigation
        this.setupNavigation();
        
        // Modal
        this.setupAuthModal();
        
        // Courses
        this.setupCourseFilter();
        
        // Testimonials
        this.setupTestimonialsSlider();
        
        // Forms
        this.setupFormValidation();
        
        // Scroll effects
        this.setupScrollEffects();
    }

    initializeComponents() {
        this.initializeAOS();
        this.initializeSmoothScroll();
    }

    handleLoadingScreen() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        loadingScreen.remove();
                    }, 500);
                }
            }, 1000);
        });
    }

    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const header = document.getElementById('header');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active link highlighting
        this.setupActiveLink();
    }

    setupActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    setupAuthModal() {
        const loginBtn = document.getElementById('login-btn');
        const signupBtn = document.getElementById('signup-btn');
        const modal = document.getElementById('auth-modal');
        const closeModal = document.querySelector('.close-modal');
        const showSignup = document.getElementById('show-signup');
        const showLogin = document.getElementById('show-login');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');

        const openModal = (formType) => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            if (formType === 'signup') {
                loginForm.classList.remove('active');
                signupForm.classList.add('active');
            } else {
                signupForm.classList.remove('active');
                loginForm.classList.add('active');
            }
        };

        const closeModalFunc = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (loginBtn) loginBtn.addEventListener('click', () => openModal('login'));
        if (signupBtn) signupBtn.addEventListener('click', () => openModal('signup'));
        if (closeModal) closeModal.addEventListener('click', closeModalFunc);
        if (showSignup) showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('signup');
        });
        if (showLogin) showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('login');
        });

        // Close modal on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModalFunc();
            }
        });
    }

    setupCourseFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const coursesGrid = document.getElementById('courses-grid');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                this.filterCourses(filter);
            });
        });
    }

    filterCourses(filter) {
        const courseCards = document.querySelectorAll('.course-card');
        
        courseCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    setupTestimonialsSlider() {
        const track = document.getElementById('testimonials-track');
        const slides = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');
        const dotsContainer = document.getElementById('slider-dots');

        let currentSlide = 0;
        const slideCount = slides.length;

        // Create dots
        if (dotsContainer) {
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('button');
                dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
                dot.setAttribute('data-slide', i);
                dot.addEventListener('click', () => this.goToSlide(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Navigation functions
        this.goToSlide = (index) => {
            currentSlide = index;
            if (track) {
                track.style.transform = `translateX(-${currentSlide * 100}%)`;
            }
            
            // Update dots
            document.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slideCount;
            this.goToSlide(currentSlide);
        };

        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            this.goToSlide(currentSlide);
        };

        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        // Auto slide
        setInterval(nextSlide, 5000);
    }

    setupFormValidation() {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const newsletterForm = document.getElementById('newsletter-form');

        if (loginForm) {
            loginForm.addEventListener('submit', this.handleLogin);
        }

        if (signupForm) {
            signupForm.addEventListener('submit', this.handleSignup);
        }

        if (newsletterForm) {
            newsletterForm.addEventListener('submit', this.handleNewsletter);
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Login attempt:', Object.fromEntries(formData));
        
        // Simulate API call
        setTimeout(() => {
            alert('Login successful! (This is a demo)');
            document.getElementById('auth-modal').classList.remove('active');
            document.body.style.overflow = '';
        }, 1000);
    }

    handleSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Signup attempt:', Object.fromEntries(formData));
        
        // Simulate API call
        setTimeout(() => {
            alert('Account created successfully! (This is a demo)');
            document.getElementById('auth-modal').classList.remove('active');
            document.body.style.overflow = '';
        }, 1000);
    }

    handleNewsletter(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription:', email);
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for subscribing! (This is a demo)');
            e.target.reset();
        }, 1000);
    }

    setupScrollEffects() {
        const scrollTopBtn = document.getElementById('scroll-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    initializeAOS() {
        // Simple scroll animation implementation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    initializeSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    loadDynamicContent() {
        this.loadCourses();
        this.loadTestimonials();
    }

    loadCourses() {
        const courses = [
            {
                id: 1,
                title: "Complete Web Development Bootcamp",
                category: "development",
                image: "assets/images/web-dev.jpg",
                description: "Learn full-stack web development with modern technologies",
                rating: 4.9,
                students: 12500,
                duration: "48 hours",
                price: 89.99,
                oldPrice: 129.99,
                badge: "Bestseller"
            },
            {
                id: 2,
                title: "UI/UX Design Masterclass",
                category: "design",
                image: "assets/images/ui-ux.jpg",
                description: "Master user interface and experience design principles",
                rating: 4.8,
                students: 8900,
                duration: "36 hours",
                price: 74.99,
                oldPrice: 99.99,
                badge: "Popular"
            },
            {
                id: 3,
                title: "Data Science Fundamentals",
                category: "development",
                image: "assets/images/data-science.jpg",
                description: "Introduction to data analysis and machine learning",
                rating: 4.7,
                students: 6700,
                duration: "42 hours",
                price: 94.99,
                oldPrice: 119.99,
                badge: "Trending"
            },
            {
                id: 4,
                title: "Digital Marketing Strategy",
                category: "marketing",
                image: "assets/images/digital-marketing.jpg",
                description: "Comprehensive guide to digital marketing campaigns",
                rating: 4.6,
                students: 5400,
                duration: "30 hours",
                price: 64.99,
                oldPrice: 89.99,
                badge: "New"
            },
            {
                id: 5,
                title: "Business Finance Essentials",
                category: "business",
                image: "assets/images/business-finance.jpg",
                description: "Learn financial management for business success",
                rating: 4.8,
                students: 3200,
                duration: "28 hours",
                price: 59.99,
                oldPrice: 79.99,
                badge: null
            },
            {
                id: 6,
                title: "Mobile App Development",
                category: "development",
                image: "assets/images/mobile-dev.jpg",
                description: "Build cross-platform mobile applications",
                rating: 4.9,
                students: 7800,
                duration: "40 hours",
                price: 84.99,
                oldPrice: 109.99,
                badge: "Hot"
            }
        ];

        const coursesGrid = document.getElementById('courses-grid');
        if (!coursesGrid) return;

        coursesGrid.innerHTML = courses.map(course => `
            <div class="course-card" data-category="${course.category}" data-aos="fade-up">
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}" loading="lazy">
                    ${course.badge ? `<div class="course-badge">${course.badge}</div>` : ''}
                </div>
                <div class="course-content">
                    <span class="course-category">${this.getCategoryName(course.category)}</span>
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-meta">
                        <div class="course-rating">
                            <i class="fas fa-star"></i>
                            <span>${course.rating} (${this.formatNumber(course.students)})</span>
                        </div>
                        <span>${course.duration}</span>
                    </div>
                    <div class="course-price">
                        $${course.price}
                        ${course.oldPrice ? `<span class="course-old-price">$${course.oldPrice}</span>` : ''}
                    </div>
                    <button class="btn primary-btn full-width">Enroll Now</button>
                </div>
            </div>
        `).join('');
    }

    loadTestimonials() {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "Web Developer",
                avatar: "assets/images/avatar-1.jpg",
                text: "Study Smart completely transformed my career. The courses are well-structured and the instructors are amazing!"
            },
            {
                name: "Mike Chen",
                role: "UX Designer",
                avatar: "assets/images/avatar-2.jpg",
                text: "I landed my dream job after completing the UI/UX Masterclass. The practical projects were incredibly valuable."
            },
            {
                name: "Emily Davis",
                role: "Data Analyst",
                avatar: "assets/images/avatar-3.jpg",
                text: "The Data Science course gave me the skills I needed to transition into tech. Highly recommended!"
            },
            {
                name: "Alex Rodriguez",
                role: "Marketing Manager",
                avatar: "assets/images/avatar-4.jpg",
                text: "The digital marketing strategies I learned helped me double our company's online engagement in just 3 months."
            }
        ];

        const track = document.getElementById('testimonials-track');
        if (!track) return;

        track.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-slide">
                <div class="testimonial-card">
                    <div class="testimonial-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <h4 class="testimonial-author">${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            </div>
        `).join('');
    }

    getCategoryName(category) {
        const categories = {
            development: "Development",
            design: "Design",
            business: "Business",
            marketing: "Marketing"
        };
        return categories[category] || category;
    }

    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new StudySmartApp();
});

// Utility functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },

    formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    }
};