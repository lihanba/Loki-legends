// Countdown Timer to 13 Dec 2025 (NZ)
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-12-13T00:00:00+13:00'); 

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if(diff <= 0){
        countdownElement.textContent = "National Championship is happening!";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(diff/(1000*60*60*24));
        const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
        const seconds = Math.floor((diff%(1000*60))/1000);
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
const countdownInterval = setInterval(updateCountdown,1000);

// Animate 50+ hours
const hoursElement = document.getElementById('hours');
let hours = 0;
const maxHours = 50;
let hoursInterval = setInterval(()=>{
    hours++;
    hoursElement.textContent = `${hours}+`;
    if(hours>=maxHours) clearInterval(hoursInterval);
},50);

// Particle Effects
const particlesContainer = document.getElementById('particles');
function createParticle(x,y){
    const p = document.createElement('div');
    p.className='particle';
    p.style.left = x+'px';
    p.style.top = y+'px';
    particlesContainer.appendChild(p);
    setTimeout(()=>p.remove(),1200);
}
document.body.addEventListener('mousemove', e => createParticle(e.pageX, e.pageY));
