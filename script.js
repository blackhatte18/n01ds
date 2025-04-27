// ===== MATRIX INITIALIZATION ===== //
document.addEventListener('DOMContentLoaded', function() {
    initMatrixRain();
    initSessionTimer();
    initTerminal();
    initAttackMap();
    initCryptoTracker();
    initSoundSystem();
});

// ===== MATRIX RAIN ===== //
function initMatrixRain() {
    const container = document.getElementById('matrixRain');
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const chars = katakana.split('');

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(13, 2, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = `${fontSize}px monospace`;
        
        drops.forEach((y, i) => {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);
            
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }

    setInterval(draw, 33);
}

// ===== SESSION TIMER ===== //
function initSessionTimer() {
    let seconds = 0;
    setInterval(() => {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        document.getElementById('sessionTimer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

// ===== TERMINAL TYPE EFFECT ===== //
function initTerminal() {
    const phrases = [
        "> SYSTEM INITIALIZED",
        "> ENCRYPTION ACTIVE",
        "> TOR CONNECTION ESTABLISHED",
        "> FIREWALL SECURE"
    ];
    
    let i = 0;
    setInterval(() => {
        document.getElementById('terminal-text').textContent = phrases[i];
        i = (i + 1) % phrases.length;
    }, 3000);
}

// ===== ATTACK MAP ===== //
function initAttackMap() {
    const globe = document.getElementById('attackGlobe');
    
    function createAttack() {
        const attack = document.createElement('div');
        attack.className = 'attack-node';
        attack.style.left = `${Math.random() * 90 + 5}%`;
        attack.style.top = `${Math.random() * 90 + 5}%`;
        globe.appendChild(attack);
        
        setTimeout(() => attack.remove(), 3000);
    }
    
    setInterval(createAttack, 800);
    for (let i = 0; i < 5; i++) createAttack();
}

// ===== CRYPTO TRACKER ===== //
function initCryptoTracker() {
    function updatePrices() {
        const btc = (60000 + Math.random() * 5000).toFixed(2);
        const eth = (3000 + Math.random() * 500).toFixed(2);
        document.getElementById('btc-price').textContent = `$${btc}`;
        document.getElementById('eth-price').textContent = `$${eth}`;
    }
    
    updatePrices();
    setInterval(updatePrices, 60000);
}

// ===== SOUND SYSTEM ===== //
function initSoundSystem() {
    const sound = document.getElementById('matrixSound');
    sound.volume = 0.3;
    sound.play().catch(e => console.log("Audio blocked:", e));
}
