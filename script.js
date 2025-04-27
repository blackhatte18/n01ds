document.addEventListener('DOMContentLoaded', function() {
    // System Initialization
    const ambientSound = document.getElementById('ambientSound');
    const soundToggle = document.getElementById('soundToggle');
    const newIdentityBtn = document.getElementById('newIdentityBtn');
    const usernameDisplay = document.getElementById('username');
    const sessionTimer = document.getElementById('sessionTimer');
    const visitorCount = document.getElementById('visitorCount');
    const attackCount = document.getElementById('attackCount');
    const threatFeed = document.getElementById('threatFeed');
    const refreshFeed = document.getElementById('refreshFeed');
    const systemTimestamp = document.getElementById('systemTimestamp');
    const attackGlobe = document.getElementById('attackGlobe');

    // Sound System
    let soundEnabled = true;
    
    function toggleSound() {
        soundEnabled = !soundEnabled;
        if (soundEnabled) {
            ambientSound.volume = 0.2;
            ambientSound.play();
            soundToggle.textContent = 'AUDIO: ON';
        } else {
            ambientSound.pause();
            soundToggle.textContent = 'AUDIO: OFF';
        }
    }
    
    soundToggle.addEventListener('click', toggleSound);
    
    // Try to autoplay sound (may be blocked by browser)
    ambientSound.volume = 0.2;
    const playPromise = ambientSound.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            soundEnabled = false;
            soundToggle.textContent = 'AUDIO: OFF';
        });
    }

    // Identity System
    function generateUsername() {
        const prefixes = ['CYBER', 'DARK', 'SHADOW', 'STEALTH', 'GHOST', 'ZERO'];
        const suffixes = ['HACK', 'CRASH', 'BYTE', 'OVERLORD', 'PROTOCOL', 'ROOT'];
        const hex = Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase();
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]}_${suffixes[Math.floor(Math.random() * suffixes.length)]}_0x${hex}`;
    }
    
    newIdentityBtn.addEventListener('click', function() {
        usernameDisplay.textContent = generateUsername();
    });
    
    // Initialize username
    usernameDisplay.textContent = generateUsername();

    // Session Timer
    let seconds = 0;
    setInterval(function() {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        sessionTimer.textContent = `[${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}]`;
    }, 1000);

    // Visitor Counter
    let connections = Math.floor(Math.random() * 500) + 250;
    setInterval(function() {
        connections += Math.floor(Math.random() * 5) - 2;
        connections = Math.max(100, connections);
        visitorCount.textContent = connections.toString().padStart(4, '0');
    }, 3000);

    // Attack Counter
    let attacks = 0;
    setInterval(function() {
        attacks += Math.floor(Math.random() * 3);
        attackCount.textContent = attacks;
    }, 5000);

    // Threat Feed
    const threatTemplates = [
        "NEW EXPLOIT DETECTED IN {SYSTEM}",
        "{COMPANY} DATABASE BREACHED - {RECORDS} RECORDS LEAKED",
        "ZERO-DAY VULNERABILITY FOUND IN {SOFTWARE}",
        "DDoS ATTACK TARGETING {ORGANIZATION}",
        "{COUNTRY} CYBER COMMAND ISSUES ALERT",
        "NEW MALWARE VARIANT: {MALWARE}",
        "{HACKER_GROUP} CLAIMS RESPONSIBILITY FOR {TARGET} ATTACK"
    ];
    
    const threatPlaceholders = {
        SYSTEM: ['WINDOWS', 'LINUX', 'MACOS', 'IOS', 'ANDROID'],
        COMPANY: ['GOOGLE', 'MICROSOFT', 'FACEBOOK', 'TWITTER', 'AMAZON'],
        RECORDS: ['THOUSANDS', 'MILLIONS', 'HUNDREDS', 'TENS OF THOUSANDS'],
        SOFTWARE: ['WEB BROWSERS', 'EMAIL CLIENTS', 'VPN SOFTWARE', 'PASSWORD MANAGERS'],
        ORGANIZATION: ['BANKS', 'GOVERNMENT', 'HOSPITALS', 'UNIVERSITIES'],
        COUNTRY: ['USA', 'CHINA', 'RUSSIA', 'UK', 'GERMANY'],
        MALWARE: ['TROJAN', 'RANSOMWARE', 'SPYWARE', 'ROOTKIT'],
        HACKER_GROUP: ['ANONYMOUS', 'LIZARD SQUAD', 'APT29', 'DARK SIDE'],
        TARGET: ['GOVERNMENT', 'CORPORATE', 'FINANCIAL', 'HEALTHCARE']
    };
    
    function generateThreatAlert() {
        const template = threatTemplates[Math.floor(Math.random() * threatTemplates.length)];
        let alert = template;
        
        for (const [key, values] of Object.entries(threatPlaceholders)) {
            const regex = new RegExp(`{${key}}`, 'g');
            alert = alert.replace(regex, values[Math.floor(Math.random() * values.length)]);
        }
        
        return alert;
    }
    
    function addThreatAlert() {
        const now = new Date();
        const timeString = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
        
        const alertItem = document.createElement('div');
        alertItem.className = 'feed-item';
        alertItem.innerHTML = `<span class="timestamp">${timeString}</span> ${generateThreatAlert()}`;
        
        threatFeed.insertBefore(alertItem, threatFeed.firstChild);
        
        if (threatFeed.children.length > 10) {
            threatFeed.removeChild(threatFeed.lastChild);
        }
    }
    
    refreshFeed.addEventListener('click', function() {
        threatFeed.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            addThreatAlert();
        }
    });
    
    // Initialize threat feed
    refreshFeed.click();
    
    // Auto-update feed every 30 seconds
    setInterval(function() {
        addThreatAlert();
    }, 30000);

    // System Timestamp
    function updateTimestamp() {
        const now = new Date();
        systemTimestamp.textContent = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
    }
    
    setInterval(updateTimestamp, 1000);
    updateTimestamp();

    // Attack Globe Simulation
    function simulateAttack() {
        const attack = document.createElement('div');
        attack.className = 'attack-node';
        attack.style.left = `${Math.random() * 90 + 5}%`;
        attack.style.top = `${Math.random() * 90 + 5}%`;
        attack.style.animationDelay = `${Math.random() * 2}s`;
        attackGlobe.appendChild(attack);
        
        setTimeout(() => {
            attack.remove();
        }, 3000);
    }
    
    setInterval(simulateAttack, 500);
    
    // Add initial attacks
    for (let i = 0; i < 5; i++) {
        simulateAttack();
    }

    // Matrix Rain Effect
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.05';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;
        
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const rainDrops = [];
        
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }
        
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                
                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };
        
        setInterval(draw, 30);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    createMatrixRain();
});
