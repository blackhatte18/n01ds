// ===== MAIN INITIALIZATION ===== //
document.addEventListener('DOMContentLoaded', function() {
    // Core Systems
    initSoundSystem();
    initIdentitySystem();
    initSessionTimer();
    initVisitorCounter();
    initThreatFeed();
    initSystemTimestamp();
    initAttackMap();
    initMatrixRain();
    
    // New Features
    initCryptoTracker();
    initNetworkTools();
    initDarkWebSimulator();
    initTerminalTyping();
});

// ===== CORE SYSTEMS ===== //
function initSoundSystem() {
    const ambientSound = document.getElementById('ambientSound');
    const soundToggle = document.getElementById('soundToggle');
    let soundEnabled = true;
    
    function toggleSound() {
        soundEnabled = !soundEnabled;
        soundToggle.textContent = `AUDIO: ${soundEnabled ? 'ON' : 'OFF'}`;
        soundEnabled ? ambientSound.play() : ambientSound.pause();
    }
    
    soundToggle.addEventListener('click', toggleSound);
    ambientSound.volume = 0.2;
    ambientSound.play().catch(() => soundToggle.textContent = 'AUDIO: OFF');
}

function initIdentitySystem() {
    const generateId = () => {
        const prefixes = ['CYBER', 'DARK', 'SHADOW', 'STEALTH'];
        const suffixes = ['HACK', 'CRASH', 'BYTE', 'OVERLORD'];
        const hex = Math.random().toString(16).substr(2, 4).toUpperCase();
        return `${prefixes[Math.floor(Math.random()*prefixes.length)]}_${suffixes[Math.floor(Math.random()*suffixes.length)]}_0x${hex}`;
    };
    
    document.getElementById('newIdentityBtn').addEventListener('click', () => {
        document.getElementById('username').textContent = generateId();
    });
    document.getElementById('username').textContent = generateId();
}

// ... (Other core systems remain unchanged) ...

// ===== NEW FEATURES ===== //
function initCryptoTracker() {
    const updatePrices = () => {
        // Fallback data if API fails
        const fallback = {
            bitcoin: { usd: (68000 + Math.random() * 2000).toFixed(2) },
            ethereum: { usd: (3800 + Math.random() * 200).toFixed(2) }
        };
        
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
            .then(res => res.ok ? res.json() : fallback)
            .then(data => {
                document.getElementById('btc-price').textContent = data.bitcoin.usd;
                document.getElementById('eth-price').textContent = data.ethereum.usd;
            })
            .catch(() => {
                document.getElementById('btc-price').textContent = fallback.bitcoin.usd;
                document.getElementById('eth-price').textContent = fallback.ethereum.usd;
            });
    };
    
    updatePrices();
    setInterval(updatePrices, 60000);
}

function initNetworkTools() {
    if (navigator.connection) {
        const updateNetwork = () => {
            const isWifi = navigator.connection.effectiveType.includes('wifi');
            document.getElementById('wifi-status').textContent = 
                `WIFI: ${isWifi ? '🔓 PUBLIC' : '🔒 SECURE'}`;
        };
        navigator.connection.addEventListener('change', updateNetwork);
        updateNetwork();
    }
    
    // Simulated VPN check
    document.getElementById('vpn-status').textContent = 
        `VPN: ${Math.random() > 0.5 ? '🟢 ACTIVE' : '🔴 INACTIVE'}`;
}

function initDarkWebSimulator() {
    const sites = [
        "Hidden Wiki 3.0 ★★★★★ (onion)",
        "Quantum Marketplace ✦✦✦✧✧ | BTC ONLY",
        "OnionChat Gateway ★★✧✧✧ | OFFLINE"
    ];
    
    document.getElementById('darkwebBtn').addEventListener('click', () => {
        const output = document.getElementById('darkweb-output');
        output.innerHTML = "> SCANNING TOR NETWORK...";
        
        setTimeout(() => {
            output.innerHTML = `> FOUND: <span class="glow-red">${
                sites[Math.floor(Math.random() * sites.length)]
            }</span>`;
        }, 2000);
    });
}

function initTerminalTyping() {
    const phrases = [
        "> INITIATING PORT SCAN...",
        "> BYPASSING FIREWALL...",
        "> ENCRYPTING CONNECTION..."
    ];
    
    let i = 0;
    setInterval(() => {
        document.getElementById('terminal-text').textContent = phrases[i];
        i = (i + 1) % phrases.length;
    }, 3000);
}

// ===== MATRIX RAIN ===== //
function initMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed
