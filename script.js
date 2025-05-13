document.addEventListener('DOMContentLoaded', () => {
    const sectionsToAnimate = document.querySelectorAll('.scroll-animate-section');
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme Toggle Logic
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeToggleButton) themeToggleButton.querySelector('i').className = 'bi bi-brightness-high-fill'; // Sun icon
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            if (themeToggleButton) themeToggleButton.querySelector('i').className = 'bi bi-moon-stars-fill'; // Moon icon
            localStorage.setItem('theme', 'dark');
        }
    };

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (body.classList.contains('light-theme')) {
                applyTheme('dark');
            } else {
                applyTheme('light');
            }
        });
    }

    // Load saved theme or detect system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default to light if no preference or saved theme
    }

    if (sectionsToAnimate.length) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-in-view');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }

    // Canvas Dots Animation for #home section
    const canvas = document.getElementById('home-canvas');
    const homeSection = document.getElementById('home');

    if (canvas && homeSection) {
        const ctx = canvas.getContext('2d');
        let dots = [];
        let numDots = 100; // Default number of dots for larger screens
        const connectDistance = 120; // Max distance to connect dots
        const mouseInteractionRadius = 180; // Increased interaction radius

        let mouse = {
            x: undefined,
            y: undefined
        };
        let isMouseOverHome = false; // Flag to track if mouse is over home section

        function resizeCanvas() {
            canvas.width = window.innerWidth; // Canvas is full viewport width
            canvas.height = window.innerHeight; // Canvas is full viewport height

            // Adjust numDots based on screen width
            if (window.innerWidth < 768) {
                numDots = 40; // Fewer dots for smaller screens
            } else {
                numDots = 100; // Default for larger screens
            }
            initDots(); // Re-initialize dots on resize for new positions
        }

        class Dot {
            constructor(x, y, vx, vy, radius, color) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.radius = radius;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Boundary check (wrap around)
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                this.draw();
            }
        }

        function initDots() {
            dots = [];
            for (let i = 0; i < numDots; i++) {
                const radius = Math.random() * 2 + 1; // Dot radius 1 to 3
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const vx = (Math.random() - 0.5) * 0.5; // Slow velocity
                const vy = (Math.random() - 0.5) * 0.5;
                // Adjusted dot color for better visibility on both themes
                const color = 'rgba(150, 150, 150, 0.5)';
                dots.push(new Dot(x, y, vx, vy, radius, color));
            }
        }

        function connectDots() {
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectDistance) {
                        const opacity = 1 - (distance / connectDistance);
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        // Adjusted line color
                        ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.3})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                // Only draw interactive lines if mouse is over home section
                if (isMouseOverHome && mouse.x !== undefined && mouse.y !== undefined) {
                    const dxMouse = dots[i].x - mouse.x;
                    const dyMouse = dots[i].y - mouse.y;
                    const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                    if (distanceMouse < mouseInteractionRadius) {
                        for (let k = 0; k < dots.length; k++) {
                            if (i === k) continue; // Don't connect dot to itself
                            const dxMouseOther = dots[k].x - mouse.x;
                            const dyMouseOther = dots[k].y - mouse.y;
                            const distanceMouseOther = Math.sqrt(dxMouseOther * dxMouseOther + dyMouseOther * dyMouseOther);

                            const dxBetween = dots[i].x - dots[k].x;
                            const dyBetween = dots[i].y - dots[k].y;
                            const distanceBetween = Math.sqrt(dxBetween * dxBetween + dyBetween * dyBetween);

                            // Connect if both dots are near the mouse and within a slightly larger connection distance
                            if (distanceMouseOther < mouseInteractionRadius && distanceBetween < connectDistance * 1.3) {
                                const opacityFactor = Math.min(1 - (distanceMouse / mouseInteractionRadius), 1 - (distanceMouseOther / mouseInteractionRadius));
                                const lineOpacity = opacityFactor * (1 - (distanceBetween / (connectDistance * 1.3)));

                                ctx.beginPath();
                                ctx.moveTo(dots[i].x, dots[i].y);
                                ctx.lineTo(dots[k].x, dots[k].y);
                                // Use CSS variable for primary accent color for interactive lines
                                const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-accent-color').trim();
                                // Convert hex/named color to rgba for opacity
                                let r = 0, g = 0, b = 0;
                                if (accentColor.startsWith('#')) {
                                    r = parseInt(accentColor.slice(1, 3), 16);
                                    g = parseInt(accentColor.slice(3, 5), 16);
                                    b = parseInt(accentColor.slice(5, 7), 16);
                                } else if (accentColor.startsWith('rgb')) { // handles rgb and rgba
                                    const parts = accentColor.match(/[\d.]+/g);
                                    if (parts && parts.length >= 3) {
                                        r = parseInt(parts[0]);
                                        g = parseInt(parts[1]);
                                        b = parseInt(parts[2]);
                                    }
                                }
                                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity * 0.9})`;
                                ctx.lineWidth = 1; // Thicker line for mouse interaction
                                ctx.stroke();
                            }
                        }
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.update();
            });
            connectDots();
        }

        // Update mouse coordinates relative to the viewport
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        // Track if mouse is over the home section for interaction
        homeSection.addEventListener('mouseenter', () => {
            isMouseOverHome = true;
        });

        homeSection.addEventListener('mouseleave', () => {
            isMouseOverHome = false;
        });

        window.addEventListener('resize', resizeCanvas);

        resizeCanvas(); // Initial setup
        animate();
    }

    // Experience Modal Logic
    const experienceData = [
        {
            id: 'self-employed',
            title: 'Self Employed',
            subtitle: 'Personal and Commercial Projects',
            date: '2019 - Present',
            description: "Driven by a passion for technology and problem-solving, I've dedicated significant time to self-directed learning and project development. This period has been crucial for honing my skills in full-stack web development, software engineering, and exploring various technologies. Below is a timeline of key personal projects undertaken, showcasing a diverse range of skills and technologies.",
            timeline: [
                { 
                    point: "Torq - Exam Preparation Platform", 
                    period: "March 2025",
                    description: "Solely developed an entrance exam preparation platform featuring 47k+ PYQs for 6 all-India exams, test generation, and preparation analysis. (<a href='https://github.com/torq-ed' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Grafite - Community Exam Prep Platform", 
                    period: "January 2025 - March 2025",
                    description: "Developed a single platform for entrance exam preparation, growing the Discord community to 500 members. Left due to internal conflicts."
                },
                { 
                    point: "Anisha - AI Powered Therapist", 
                    period: "January 2025",
                    description: "Represented my region at Pariksha Pe Charcha 2024 with this AI-powered therapist featuring emotion detection, presented in front of the Honorable Prime Minister Shri Narendra Modi."
                },
                { 
                    point: "Zap - Open Source Social Platform", 
                    period: "August 2024",
                    description: "Solo developed an open-source Instagram-like platform. (<a href='https://github.com/natyavidhan/zap' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Home Server Setup", 
                    period: "June 2024",
                    description: "Built a home server using old computer parts, running Linux with NAS functionality, media streaming (Plex/Jellyfin), VPN, and Docker containerization for various services."
                },
                { 
                    point: "Sudoku Solver & Game", 
                    period: "July 2022",
                    description: "A GUI Sudoku game with a built-in auto-solver, developed using Pygame and a backtracking algorithm. (<a href='https://github.com/studiousgamer/sudoku-solver' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "AnonBlogs - Anonymous Blogging Platform", 
                    period: "July 2022",
                    description: "A web application for posting blogs anonymously, built with Flask and MongoDB. (<a href='https://github.com/natyavidhan/anonblogs' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Tyro Engine - Python Game Engine", 
                    period: "July 2022",
                    description: "A game engine built entirely in Python, running on top of Pygame, providing an easy interface for game development. (<a href='https://github.com/Tyro-Inc/Tyro-Engine' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Wave Function Collapse Algorithm", 
                    period: "July 2022",
                    description: "An implementation of the Wave Function Collapse algorithm in Python for procedural generation. (<a href='https://github.com/studiousgamer/wfc' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Tic-Tac-Toe AI", 
                    period: "June 2022",
                    description: "A Tic-Tac-Toe game made with Pygame, featuring player vs. player and player vs. AI modes. The AI uses the Minimax algorithm. (<a href='https://github.com/studiousgamer/Tic-Tac-Toe-AI' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "RegShop - Shop Management Web App", 
                    period: "June 2022",
                    description: "A web application to manage multiple shops, supporting item list creation, receipt generation, and history viewing. (<a href='https://github.com/studiousgamer/regshop' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Snipper - Code Snippet Sharing App", 
                    period: "April 2022",
                    description: "A web app for sharing code snippets, built with Flask and MongoDB. Supports over 120 languages and 65 themes. (<a href='https://github.com/studiousgamer/snipper' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                },
                { 
                    point: "Classroom Clone", 
                    period: "December 2021",
                    description: "A clone of Google Classroom with approximately 80-90% of its features, including class creation, student management, assignments (text and file-based), resource sharing, and a rich text editor. (<a href='https://github.com/studiousgamer/classroom-clone' target='_blank' rel='noopener noreferrer'>GitHub</a>)"
                }
            ]
        },
        {
            id: 'intern-fnd',
            title: 'Software Development Intern',
            subtitle: 'Facts-n-Data',
            date: 'March 2024 - April 2025',
            description: "As an intern at Facts-n-Data, I contributed to a wide array of data scraping and automation projects, focusing on e-commerce platforms. My responsibilities included developing and maintaining scripts for extracting product information, best seller ranks (BSR), search term rankings, and item stock levels across various Amazon domains (e.g., .in, .com, .ae, .sa, .uk) and other platforms like FirstCry and Myntra. I was involved in the full development lifecycle, from initial script creation and debugging to implementing major feature enhancements, refactoring code for efficiency, and ensuring data accuracy.",
            timeline: [
                { 
                    point: "Initial Development & System Setup", 
                    period: "March - April 2024",
                    description: "Focused on initial project setup, codebase cleanup, and implementation of schedulers for automated tasks." 
                },
                { 
                    point: "E-commerce Data Extraction (Amazon Focus)", 
                    period: "June - August 2024",
                    description: "Developed and debugged scripts for Best Seller Rank (BSR), search term analysis, and item stock monitoring across multiple Amazon regional sites (India, UAE). Implemented features for handling diverse product data and seller details." 
                },
                { 
                    point: "Expansion to New Platforms & Feature Enhancements", 
                    period: "September - November 2024",
                    description: "Expanded scraping capabilities to new e-commerce platforms including FirstCry and Myntra. Implemented dynamic attribute handling, review data extraction, and began work on item detail scrapers for these new platforms. Focused on optimizing search term analysis and handling duplicate data entries." 
                },
                { 
                    point: "Script Refactoring & Advanced Feature Implementation", 
                    period: "December 2024 - February 2025",
                    description: "Completed a major rewrite and refactor of item stock scripts for improved efficiency and reliability. Developed new features for specific search term requirements, addressed complex data parsing issues, and began work on internal tools including user authentication and employee management pages." 
                },
                { 
                    point: "Final Optimizations & Utility Script Development", 
                    period: "March - April 2025",
                    description: "Implemented final fixes and optimizations for BSR and review scraping scripts across various platforms. Developed utility scripts for merging and redating output data, enhancing overall data management capabilities." 
                }
            ]
        },
        {
            id: 'freelancing',
            title: 'Freelance Developer',
            subtitle: 'Web Development & Automation',
            date: '2023 - Present',
            description: "As a freelance developer, I've tackled a diverse range of projects, specializing in web development, data automation, and complex data analysis solutions. My work includes building dynamic, API-driven websites with Next.js, developing sophisticated data scraping tools for various platforms (Tiltify, Twitch, Stream Charts), and engineering multi-modal analysis pipelines for online streaming content. These projects have involved extensive use of Python, JavaScript, API integration, database management, and advanced data processing techniques, consistently delivering tailored and impactful solutions for clients.",
            timeline: [
                { 
                    point: "Arvie K Games Website", 
                    period: "December 2024",
                    description: `<ul>
                        <li>Developed a Next.js website for hosting browser-based HTML5 games.</li>
                        <li>Created dynamic game pages with descriptions, controls, devlogs, and SEO-friendly metadata.</li>
                        <li>Designed a homepage with categorized game listings and a featured new game section.</li>
                        <li>Integrated an external API for game data management and supported offline play.</li>
                        <li>Styled with CSS Modules and custom fonts using next/font.</li>
                    </ul>`
                },
                { 
                    point: "Melbourne Stream Analysis", 
                    period: "December 2023",
                    description: `<ul>
                        <li>Engineered a multi-modal data pipeline for Twitch stream analysis (video, audio, chat).</li>
                        <li>Automated data download, StreamCharts metadata scraping, and audio processing (segmentation, Whisper ASR transcription, Google Perspective API sentiment/toxicity).</li>
                        <li>Implemented video analysis: frame extraction, face detection (RetinaFace), facial emotion recognition (DeepFace, Keras).</li>
                        <li>Processed chat logs for sentiment/toxicity (Google Perspective API) and LIWC analysis.</li>
                        <li>Aggregated data into comprehensive Excel reports per streamer with per-interval metrics.</li>
                        <li>Included utilities for data organization, file management, and result uploading.</li>
                    </ul>`
                },
                { 
                    point: "Tiltify Fundraising Campaign Scraper", 
                    period: "July 2023",
                    description: `<ul>
                        <li>Developed a Python tool to scrape Tiltify fundraising campaigns, enriching data with Twitch & Stream Charts info.</li>
                        <li>Utilized Tiltify API (OAuth2) for campaign details, donation history, and fundraiser profiles.</li>
                        <li>Integrated Twitch API for real-time channel data (live status, viewers, bits/subs).</li>
                        <li>Employed Selenium & undetected_chromedriver for Stream Charts VOD link extraction and cookie management.</li>
                        <li>Stored data systematically in local JSON files with robust error logging and continuous monitoring.</li>
                        <li>Included functionality to process collected JSON data into Excel spreadsheets.</li>
                    </ul>`
                }
            ]
        }
    ];

    const modalOverlay = document.getElementById('experience-modal');
    const modalTitleElem = document.getElementById('modal-title');
    const modalSubtitleElem = document.getElementById('modal-subtitle');
    const modalDateElem = document.getElementById('modal-date');
    const modalDescriptionElem = document.getElementById('modal-description');
    const modalTimelineElem = document.getElementById('modal-timeline');
    const modalCloseButton = modalOverlay ? modalOverlay.querySelector('.modal-close-button') : null;
    const expCardButtons = document.querySelectorAll('.exp-card-button');

    function openModal(experienceId) {
        const data = experienceData.find(exp => exp.id === experienceId);
        if (!data || !modalOverlay) return;

        modalTitleElem.textContent = data.title;
        modalSubtitleElem.textContent = data.subtitle;
        modalDateElem.textContent = data.date;
        
        modalDescriptionElem.innerHTML = ''; // Clear previous
        const descPara = document.createElement('p');
        descPara.innerHTML = data.description; // Use innerHTML if description contains HTML
        modalDescriptionElem.appendChild(descPara);

        modalTimelineElem.innerHTML = ''; // Clear previous
        if (data.timeline && data.timeline.length > 0) {
            const timelineTitle = document.createElement('h5');
            timelineTitle.textContent = 'Key Activities & Projects:'; // Adjusted title
            modalTimelineElem.appendChild(timelineTitle);

            const ul = document.createElement('ul');
            data.timeline.forEach(item => {
                const li = document.createElement('li');
                const strong = document.createElement('strong');
                strong.innerHTML = item.point; // Use innerHTML for project titles with links
                li.appendChild(strong);
                
                if (item.period) {
                    const span = document.createElement('span');
                    span.textContent = item.period;
                    li.appendChild(span);
                }
                // Add description for timeline item if it exists
                if (item.description) {
                    const descDiv = document.createElement('div');
                    descDiv.style.fontSize = '0.9em'; // Smaller font for description
                    descDiv.style.opacity = '0.8';
                    descDiv.style.marginTop = '0.25rem';
                    descDiv.innerHTML = item.description; // Use innerHTML for descriptions with links
                    li.appendChild(descDiv);
                }
                ul.appendChild(li);
            });
            modalTimelineElem.appendChild(ul);
        }
        
        modalOverlay.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('active');
        body.style.overflow = ''; // Restore background scrolling
    }

    expCardButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.exp-card');
            const experienceId = card.dataset.modalTarget;
            openModal(experienceId);
        });
    });

    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) { // Clicked on overlay, not content
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

});
