document.addEventListener('DOMContentLoaded', function() {
    // Core Systems
    initSoundSystem();
    initIdentitySystem();
    initSessionTimer();
    initVisitorCounter();
    initTerminalTyping();
    
    // Map System
    initAttackMap();
    
    // New Features
    initCryptoTracker();
    initNetworkTools();
    initDarkWebSimulator();
});

// ===== CORE SYSTEMS ===== //
function initSoundSystem() {
    const soundToggle = document.getElementById('soundToggle');
    const ambientSound = document.getElementById('ambientSound');
    let soundOn = true;
    
    soundToggle.addEventListener('click', () => {
        soundOn = !soundOn;
        soundToggle.textContent = `SOUND: ${soundOn ? 'ON' : 'OFF'}`;
        soundOn ? ambientSound.play() : ambientSound.pause();
    });
    
    ambientSound.volume = 0.2;
    ambientSound.play().catch(() => soundToggle.textContent = 'SOUND: BLOCKED');
}

function initIdentitySystem() {
    const generateId = () => {
        const prefixes = ['GHOST', 'SHADOW', 'STEALTH', 'ZERO'];
        const suffixes = ['HACK', 'BYTE', 'OVERLORD', 'PROTOCOL'];
        const hex = Math.random().toString(16).slice(2, 6).toUpperCase();
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]}_${hex}`;
    };
    
    document.getElementById('newIdentityBtn').addEventListener('click', () => {
        document.getElementById('username').textContent = generateId();
    });
}

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

function initVisitorCounter() {
    let count = Math.floor(Math.random() * 9000) + 1000;
    setInterval(() => {
        count += Math.floor(Math.random() * 3) - 1;
        document.getElementById('visitorCount').textContent = count.toString().padStart(4, '0');
    }, 3000);
}

function initTerminalTyping() {
    const phrases = [
        "> SYSTEM SECURE",
        "> ENCRYPTION ACTIVE",
        "> TOR CONNECTION ESTABLISHED"
    ];
    let i = 0;
    setInterval(() => {
        document.getElementById('terminal-text').textContent = phrases[i];
        i = (i + 1) % phrases.length;
    }, 3000);
}

// ===== MAP SYSTEM ===== //
function initAttackMap() {
    const globe = document.getElementById('attackGlobe');
    const toggle = document.getElementById('mapToggle');
    let mode = 'simulated';
    
    toggle.addEventListener('click', () => {
        mode = mode === 'simulated' ? 'real' : 'simulated';
        toggle.textContent = mode === 'simulated' ? 'REAL DATA' : 'SIMULATED';
        updateMap();
    });
    
    function updateMap() {
        if (mode === 'simulated') {
            globe.innerHTML = '';
            // Create simulated attacks
            for (let i = 0; i < 5; i++) {
                const attack = document.createElement('div');
                attack.className = 'attack-node';
                attack.style.left = `${Math.random() * 90 + 5}%`;
                attack.style.top = `${Math.random() * 90 + 5}%`;
                globe.appendChild(attack);
            }
        } else {
            globe.innerHTML = `
                <iframe src="https://digitalattackmap.com/embed#anim=1&color=0&country=ALL&list=0" 
                        style="width:100%;height:100%;border:none;"></iframe>
            `;
        }
    }
    
    updateMap();
}

// ===== NEW FEATURES ===== //
function initCryptoTracker() {
    const updatePrices = () => {
        // Fallback data
        const btcPrice = (60000 + Math.random() * 5000).toFixed(2);
        const ethPrice = (3000 + Math.random() * 500).toFixed(2);
        
        document.getElementById('btc-price').textContent = `$${btcPrice}`;
        document.getElementById('eth-price').textContent = `$${ethPrice}`;
    };
    
    updatePrices();
    setInterval(updatePrices, 60000);
}

function initNetworkTools() {
    document.getElementById('wifi-status').textContent = 
        `WIFI: ${Math.random() > 0.5 ? '🔒 SECURE' : '🔓 PUBLIC'}`;
    document.getElementById('vpn-status').textContent = 
        `VPN: ${Math.random() > 0.7 ? '🟢 ACTIVE' : '🔴 INACTIVE'}`;
}

function initDarkWebSimulator() {
    const sites = [
        "HIDDEN WIKI ★★★★★",
        "QUANTUM MARKET ✦✦✦✧✧",
        "ONION CHAT ✦✧✧✧✧"
    ];
    
    document.getElementById('darkwebBtn').addEventListener('click', () => {
        const output = document.getElementById('darkweb-output');
        output.textContent = "> SCANNING...";
        
        setTimeout(() => {
            output.textContent = `> FOUND: ${sites[Math.floor(Math.random() * sites.length]}`;
        }, 2000);
    });
}
