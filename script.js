document.addEventListener('DOMContentLoaded', () => {
    const sectionsToAnimate = document.querySelectorAll('.scroll-animate-section');

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
        const numDots = 80; // Increased number of dots
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
                const color = 'rgba(200, 200, 200, 0.5)'; // Light grey, semi-transparent
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
                        ctx.strokeStyle = `rgba(200, 200, 200, ${opacity * 0.3})`; // Lighter lines
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
                                ctx.strokeStyle = `rgba(0, 168, 204, ${lineOpacity * 0.9})`; // Accent color, more opaque
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
});
