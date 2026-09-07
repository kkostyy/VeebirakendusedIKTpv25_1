document.addEventListener('DOMContentLoaded', () => {
    // --- 1. УПРАВЛЕНИЕ БОКОВЫМ МЕНЮ (SIDEBAR) ---
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-btn');
    const arrow = toggleBtn ? toggleBtn.querySelector('.arrow') : null;

    // Наведение мыши (десктоп)
    if (sidebar && toggleBtn) {
        sidebar.addEventListener('mouseenter', () => {
            sidebar.classList.add('open');
            document.body.classList.add('sidebar-open');
            if (arrow) arrow.style.transform = 'rotate(180deg)';
        });
        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.remove('open');
            document.body.classList.remove('sidebar-open');
            if (arrow) arrow.style.transform = 'rotate(0deg)';
        });
    }
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            // Переключаем класс открытия на меню и на body (для сдвига контента)
            sidebar.classList.toggle('open');
            document.body.classList.toggle('sidebar-open');

            // Поворачиваем стрелку на кнопке
            if (arrow) {
                if (sidebar.classList.contains('open')) {
                    arrow.style.transform = 'rotate(180deg)';
                } else {
                    arrow.style.transform = 'rotate(0deg)';
                }
            }
        });

        // Закрываем меню при клике вне его области
        document.addEventListener('click', (event) => {
            if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                document.body.classList.remove('sidebar-open');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            }
        });
    }

    // --- 2. FAQ АККОРДЕОН ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Закрываем другие открытые пункты
            faqItems.forEach(el => el.classList.remove('active'));

            // Если кликнутый пункт не был активен, открываем его
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- 3. АНИМАЦИЯ ПОЯВЛЕНИЯ ФУТЕРА ПРИ СКРОЛЛЕ ---
    const footer = document.querySelector('footer');
    if (footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(footer);
    }

    // --- 4. CANVAS ЭФФЕКТ В ФУТЕРЕ (Интерактивные частицы) ---
    const canvas = document.getElementById('techCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 35;

        function resizeCanvas() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1;
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(122, 179, 232, ${this.alpha})`;
                ctx.fill();
            }
        }

        // Инициализация частиц
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Анимационный цикл
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Отрисовка частиц и соединительных линий
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(122, 179, 232, ${0.15 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
});