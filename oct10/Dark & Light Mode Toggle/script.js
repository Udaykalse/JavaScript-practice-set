
class ThemeManager {
    constructor() {
        this.toggle = document.getElementById('toggle');
        this.body = document.body;
        this.themeTexts = document.querySelectorAll('.theme-text');
        this.init();
    }

    init() {
        this.loadTheme();
        
        this.toggle.addEventListener('click', () => this.toggleTheme());
        
        setTimeout(() => {
            this.body.classList.add('theme-transition');
        }, 100);

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    toggleTheme() {
        this.body.classList.toggle('dark-theme');
        this.updateThemeText();
        this.saveTheme();
        this.animateToggle();
    }

    updateThemeText() {
        const isDark = this.body.classList.contains('dark-theme');
        this.themeTexts.forEach(text => {
            text.textContent = isDark ? 'Dark' : 'Light';
        });
    }

    animateToggle() {
        const toggleLabel = document.querySelector('.toggle-label');
        toggleLabel.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleLabel.style.transform = 'scale(1)';
        }, 150);
    }

    saveTheme() {
        const isDark = this.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        this.updateMetaThemeColor(isDark);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            this.body.classList.add('dark-theme');
            this.toggle.checked = true;
        } else {
            this.body.classList.remove('dark-theme');
            this.toggle.checked = false;
        }
        
        this.updateThemeText();
        this.updateMetaThemeColor(this.body.classList.contains('dark-theme'));
    }

    updateMetaThemeColor(isDark) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = isDark ? '#15181f' : '#4a6cf7';
    }

    setTheme(theme) {
        if (theme === 'dark') {
            this.body.classList.add('dark-theme');
            this.toggle.checked = true;
        } else {
            this.body.classList.remove('dark-theme');
            this.toggle.checked = false;
        }
        this.updateThemeText();
        this.saveTheme();
    }

    getCurrentTheme() {
        return this.body.classList.contains('dark-theme') ? 'dark' : 'light';
    }
}

function watchSystemTheme() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const themeManager = new ThemeManager();
            themeManager.setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    watchSystemTheme();
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}