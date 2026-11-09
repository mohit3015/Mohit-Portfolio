/* ===================================================
   MOHIT'S PORTFOLIO - ENHANCED JAVASCRIPT
   Handles: Interactive RAG Trace, Dynamic Typing,
   Copy Email, Formspree AJAX Form, Scroll Reveals,
   Tech Ticker, Mobile Nav & Particles
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===================== NAVBAR SCROLL & ACTIVE LINK =====================
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScrollHandler() {
        const scrollY = window.scrollY;

        // Navbar shadow & glassmorphism
        if (scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top visibility
        if (scrollY > 450) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active link tracking
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScrollHandler, { passive: true });
    onScrollHandler();

    // Back to top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // ===================== MOBILE MENU (HAMBURGER) =====================
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('open');
            document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
        });

        // Close on link click
        navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }


    // ===================== DYNAMIC TYPING EFFECT =====================
    const typedTextElement = document.getElementById('typedText');
    const phrases = [
        'Python Developer',
        'AI/ML Developer',
        'GenAI & RAG Developer',
        'Agentic AI Enthusiast',
        'RAG Systems Engineer',
        'Data Science Enthusiast'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 90;

    function handleTypeEffect() {
        if (!typedTextElement) return;

        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 45;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 90;
        }

        // Finished typing phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2200; // Pause at end of phrase
        }

        // Finished deleting phrase
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 450; // Pause before typing next phrase
        }

        setTimeout(handleTypeEffect, typeSpeed);
    }

    handleTypeEffect();


    // ===================== INTERACTIVE RAG TRACE SIMULATOR =====================
    const stageBtns = document.querySelectorAll('.stage-btn');
    const traceRows = document.querySelectorAll('.trace-row');
    const tracePauseBtn = document.getElementById('tracePauseBtn');
    const traceAutoStatus = document.getElementById('traceAutoStatus');

    let currentStage = 0;
    let isAutoCycling = true;
    let cycleInterval = null;

    function setStage(index) {
        currentStage = index;

        stageBtns.forEach((btn, i) => {
            const isMatch = i === index;
            btn.classList.toggle('active', isMatch);
            btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
        });

        traceRows.forEach((row, i) => {
            row.classList.toggle('active', i === index);
        });
    }

    function startAutoCycle() {
        if (cycleInterval) clearInterval(cycleInterval);
        cycleInterval = setInterval(() => {
            if (isAutoCycling) {
                const nextStage = (currentStage + 1) % stageBtns.length;
                setStage(nextStage);
            }
        }, 3200);
    }

    stageBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetStage = parseInt(btn.getAttribute('data-stage'), 10);
            setStage(targetStage);
            // Temporarily pause on manual interaction
            pauseCycle();
        });
    });

    function pauseCycle() {
        isAutoCycling = false;
        if (tracePauseBtn) {
            tracePauseBtn.textContent = 'Resume Auto-Cycle';
        }
        if (traceAutoStatus) {
            traceAutoStatus.innerHTML = '<i class="fas fa-pause-circle"></i> Paused (Interactive)';
            traceAutoStatus.style.color = '#a1a1b5';
        }
    }

    function resumeCycle() {
        isAutoCycling = true;
        if (tracePauseBtn) {
            tracePauseBtn.textContent = 'Pause Auto-Cycle';
        }
        if (traceAutoStatus) {
            traceAutoStatus.innerHTML = '<i class="fas fa-play-circle"></i> Auto-Cycling';
            traceAutoStatus.style.color = 'var(--accent-cyan)';
        }
    }

    if (tracePauseBtn) {
        tracePauseBtn.addEventListener('click', () => {
            if (isAutoCycling) {
                pauseCycle();
            } else {
                resumeCycle();
            }
        });
    }

    // Initialize auto cycle
    startAutoCycle();


    // ===================== QUICK COPY EMAIL BUTTON =====================
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');
    const copyBtnText = document.getElementById('copyBtnText');

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'mk5972345@gmail.com';

            function showCopiedState() {
                copyEmailBtn.classList.add('copied');
                copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> <span>Copied!</span>';
                setTimeout(() => {
                    copyEmailBtn.classList.remove('copied');
                    copyEmailBtn.innerHTML = '<i class="fas fa-copy"></i> <span id="copyBtnText">Copy</span>';
                }, 2500);
            }

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(showCopiedState).catch(() => {
                    fallbackCopy(email, showCopiedState);
                });
            } else {
                fallbackCopy(email, showCopiedState);
            }
        });
    }

    function fallbackCopy(text, callback) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
            document.execCommand('copy');
            if (callback) callback();
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(tempInput);
    }



    // ===================== PARTICLE BACKGROUND =====================
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
        const particleCount = 28;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 3.5 + 1.5;
            const left = Math.random() * 100;
            const duration = Math.random() * 14 + 10;
            const delay = Math.random() * 12;
            const opacity = Math.random() * 0.45 + 0.15;
            const color = Math.random() > 0.6 ? '#8b5cf6' : (Math.random() > 0.5 ? '#06b6d4' : '#3b82f6');

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                opacity: ${opacity};
                background: ${color};
                box-shadow: 0 0 ${size * 2}px ${color};
            `;

            particlesContainer.appendChild(particle);
        }
    }


    // ===================== SCROLL REVEAL ANIMATIONS =====================
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('revealed'));
    }


    // ===================== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
