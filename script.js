document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const showMoreBtn = document.getElementById('show-more-projects');

    // ---- Self-updating Age ----
    const ageEl = document.getElementById('age');
    if (ageEl) {
        const dob = new Date(2006, 10, 17); // 17 Nov 2006 (month is 0-indexed)
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
        ageEl.textContent = age;
    }

    // ---- Theme Toggle ----
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
            themeToggle.querySelector('i').className = 'bi bi-brightness-high-fill';
        } else {
            body.classList.remove('light-theme');
            themeToggle.querySelector('i').className = 'bi bi-moon-stars-fill';
        }
        localStorage.setItem('theme', theme);
    }

    // Load saved theme or detect system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    themeToggle.addEventListener('click', () => {
        applyTheme(body.classList.contains('light-theme') ? 'dark' : 'light');
    });

    // ---- Scroll Reveal (IntersectionObserver) ----
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        reveals.forEach((el) => observer.observe(el));
    }

    // ---- Show More Projects ----
    if (showMoreBtn) {
        const extras = document.querySelectorAll('.project-extra');
        let expanded = false;

        showMoreBtn.addEventListener('click', () => {
            expanded = !expanded;
            extras.forEach((card) => card.classList.toggle('visible', expanded));
            showMoreBtn.classList.toggle('expanded', expanded);

            if (expanded) {
                showMoreBtn.innerHTML = 'Show fewer projects <i class="bi bi-chevron-up"></i>';
            } else {
                showMoreBtn.innerHTML = `Show ${extras.length} more projects <i class="bi bi-chevron-down"></i>`;
            }
        });
    }
});
