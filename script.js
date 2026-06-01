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

    // ---- Webring ----
    const webringContainer = document.getElementById('webring');
    const webringSection = document.getElementById('webring-section');
    if (webringContainer && webringSection) {
        fetch('https://ring.seggs.lol/webring')
            .then(res => res.json())
            .then(data => {
                const mySiteName = "natya";
                const currentIndex = data.findIndex(site => site.name === mySiteName);
                
                if (currentIndex !== -1) {
                    const prevIndex = (currentIndex - 1 + data.length) % data.length;
                    const nextIndex = (currentIndex + 1) % data.length;
                    
                    const prevSite = data[prevIndex];
                    const nextSite = data[nextIndex];
                    
                    const prevBtn = document.getElementById('webring-prev');
                    const nextBtn = document.getElementById('webring-next');
                    const randBtn = document.getElementById('webring-rand');
                    
                    if (prevBtn) prevBtn.href = prevSite.url;
                    if (nextBtn) nextBtn.href = nextSite.url;
                    if (randBtn) randBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const randIndex = Math.floor(Math.random() * data.length);
                        window.open(data[randIndex].url, '_blank');
                    });
                }

                const otherSites = data.filter(site => site.name !== mySiteName);
                
                if (otherSites.length > 0) {
                    let html = '';
                    otherSites.forEach(site => {
                        const domain = new URL(site.url).hostname;
                        html += `
                            <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="webring-item">
                                <img src="https://www.google.com/s2/favicons?domain=${domain}&sz=32" alt="${site.name} icon" class="webring-icon" loading="lazy">
                                <span class="webring-name">${site.name}</span>
                            </a>
                        `;
                    });
                    
                    webringContainer.innerHTML = html;
                    webringSection.style.display = 'block';
                }
            })
            .catch(err => console.error("Error fetching webring:", err));
    }
});
