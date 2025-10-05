// Form validation and handling
class FormValidation {
    constructor() {
        this.init();
    }

    init() {
        this.setupValidationRules();
        this.setupRealTimeValidation();
    }

    setupValidationRules() {
        // Add validation attributes to forms
        const forms = document.querySelectorAll('form[needs-validation]');
        
        forms.forEach(form => {
            form.setAttribute('novalidate', 'true');
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });

        // Add input event listeners for real-time validation
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearFieldError.bind(this));
        });
    }

    setupRealTimeValidation() {
        const emailFields = document.querySelectorAll('input[type="email"]');
        const passwordFields = document.querySelectorAll('input[type="password"]');
        
        emailFields.forEach(field => {
            field.addEventListener('input', utils.debounce(() => {
                this.validateEmail(field);
            }, 500));
        });

        passwordFields.forEach(field => {
            field.addEventListener('input', utils.debounce(() => {
                this.validatePassword(field);
            }, 500));
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const isValid = this.validateForm(form);

        if (isValid) {
            this.submitForm(form);
        } else {
            this.showFormError(form, 'Please fix the errors above.');
        }
    }

    validateForm(form) {
        let isValid = true;
        const fields = form.querySelectorAll('input, textarea, select');

        fields.forEach(field => {
            if (!this.validateField({ target: field })) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const type = field.type;
        const isRequired = field.required;

        this.clearFieldError(field);

        // Check required fields
        if (isRequired && !value) {
            this.showFieldError(field, 'This field is required.');
            return false;
        }

        // Type-specific validation
        switch (type) {
            case 'email':
                if (!this.isValidEmail(value)) {
                    this.showFieldError(field, 'Please enter a valid email address.');
                    return false;
                }
                break;
                
            case 'password':
                if (!this.isValidPassword(value)) {
                    this.showFieldError(field, 'Password must be at least 8 characters with letters and numbers.');
                    return false;
                }
                break;
                
            case 'tel':
                if (!this.isValidPhone(value)) {
                    this.showFieldError(field, 'Please enter a valid phone number.');
                    return false;
                }
                break;
        }

        // Custom validation based on data attributes
        if (field.hasAttribute('data-min-length')) {
            const minLength = parseInt(field.getAttribute('data-min-length'));
            if (value.length < minLength) {
                this.showFieldError(field, `Must be at least ${minLength} characters.`);
                return false;
            }
        }

        if (field.hasAttribute('data-max-length')) {
            const maxLength = parseInt(field.getAttribute('data-max-length'));
            if (value.length > maxLength) {
                this.showFieldError(field, `Must be less than ${maxLength} characters.`);
                return false;
            }
        }

        this.showFieldSuccess(field);
        return true;
    }

    validateEmail(field) {
        const value = field.value.trim();
        if (value && !this.isValidEmail(value)) {
            this.showFieldError(field, 'Please enter a valid email address.');
            return false;
        }
        this.clearFieldError(field);
        return true;
    }

    validatePassword(field) {
        const value = field.value;
        if (value && !this.isValidPassword(value)) {
            this.showFieldError(field, 'Password must be at least 8 characters with letters and numbers.');
            return false;
        }
        this.clearFieldError(field);
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPassword(password) {
        // At least 8 characters, 1 letter, 1 number
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
        
        // Add aria attributes for accessibility
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorElement.id || this.generateId());
    }

    showFieldSuccess(field) {
        field.classList.remove('error');
        field.classList.add('success');
        
        // Remove success class after animation
        setTimeout(() => {
            field.classList.remove('success');
        }, 2000);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    showFormError(form, message) {
        this.clearFormError(form);
        
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        
        form.insertBefore(errorElement, form.firstChild);
        
        // Scroll to error
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    clearFormError(form) {
        const existingError = form.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
    }

    submitForm(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Show loading state
        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';
            submitBtn.disabled = true;
        }

        // Simulate API call (replace with actual API call)
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.textContent = 'Success!';
                submitBtn.disabled = false;
                
                // Reset button text after delay
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                }, 2000);
            }
            
            this.showSuccessMessage(form);
            form.reset();
        }, 2000);
    }

    showSuccessMessage(form) {
        const successElement = document.createElement('div');
        successElement.className = 'form-success';
        successElement.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Form submitted successfully!</span>
        `;
        
        form.appendChild(successElement);
        
        setTimeout(() => {
            successElement.remove();
        }, 5000);
    }

    generateId() {
        return 'error-' + Math.random().toString(36).substr(2, 9);
    }
}

// Additional CSS for form validation
const formValidationStyles = `
    .field-error {
        color: #e53e3e;
        font-size: 1.4rem;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .field-error::before {
        content: '⚠';
    }
    
    .form-error {
        background: #fed7d7;
        color: #c53030;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        border-left: 4px solid #e53e3e;
    }
    
    .form-success {
        background: #c6f6d5;
        color: #2d7d32;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        margin-top: 2rem;
        border-left: 4px solid #38a169;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    input.error,
    textarea.error,
    select.error {
        border-color: #e53e3e !important;
        box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1) !important;
    }
    
    input.success,
    textarea.success,
    select.success {
        border-color: #38a169 !important;
        box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.1) !important;
    }
    
    .loading-dots {
        display: inline-flex;
        gap: 4px;
    }
    
    .loading-dots span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: currentColor;
        animation: loading-dots 1.4s ease-in-out infinite both;
    }
    
    .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
    .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes loading-dots {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = formValidationStyles;
document.head.appendChild(styleSheet);

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
    new FormValidation();
});