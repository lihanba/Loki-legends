// Countdown Timer
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-12-14T00:00:00Z');

function updateCountdown() {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        countdownElement.textContent = 'Event has started!';
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Scroll Animations
const sections = document.querySelectorAll('.animate-section');

function handleScrollAnimations() {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
handleScrollAnimations(); // Initial check

// Animate 50+ Hours Counting
let hoursElement = document.getElementById('hours');
let hours = 0;
const targetHours = 50;
let interval = setInterval(() => {
    hours++;
    hoursElement.innerHTML = hours + "+";
    if(hours >= targetHours) clearInterval(interval);
}, 50);

// Particle Animation
const particlesContainer = document.getElementById('particles');

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

document.body.addEventListener('mousemove', (event) => {
    createParticle(event.pageX, event.pageY);
});

