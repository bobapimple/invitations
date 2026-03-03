document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const floralBg = document.getElementById('floralBg');
    const closeBtn = document.getElementById('closeBtn');

    // Toggle envelope open/close
    envelope.addEventListener('click', (e) => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            document.body.classList.add('open'); // For overlay
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        envelope.classList.remove('open');
        document.body.classList.remove('open');
    });

    // Parallax Effect for Background Flowers
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

        const flowers = document.querySelectorAll('.flower');
        flowers.forEach((flower, index) => {
            const speed = (index % 5 + 1) * 0.5;
            flower.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
    });

    // Inject Intricate SVG flowers for background
    const flowerColors = ['#D4A5A5', '#B87D7D', '#E9C2C2', '#C5A059', '#6D2E46'];

    function createFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';

        const size = Math.random() * 60 + 40;
        const color = flowerColors[Math.floor(Math.random() * flowerColors.length)];

        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;

        // Random initial scale for variety
        const scale = Math.random() * 0.5 + 0.5;

        flower.innerHTML = `
            <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
                <defs>
                    <radialGradient id="grad-${color.replace('#', '')}" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                        <stop offset="100%" style="stop-color:${color};stop-opacity:0.6" />
                    </radialGradient>
                </defs>
                <!-- Central core -->
                <circle cx="50" cy="50" r="10" fill="var(--gold)" />
                <!-- Petals (Layer 1) -->
                ${Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 360) / 8;
            return `<path d="M50 50 Q50 10 70 30 Q50 50 50 50" fill="url(#grad-${color.replace('#', '')})" transform="rotate(${angle} 50 50)" />`;
        }).join('')}
                <!-- Petals (Layer 2) -->
                ${Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 360) / 8 + 22.5;
            return `<path d="M50 50 Q50 20 60 40 Q50 50 50 50" fill="white" opacity="0.4" transform="rotate(${angle} 50 50)" />`;
        }).join('')}
            </svg>
        `;

        floralBg.appendChild(flower);
    }

    // Create 25 flowers for a richer background
    for (let i = 0; i < 25; i++) {
        createFlower();
    }
});
