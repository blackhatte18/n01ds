document.addEventListener('DOMContentLoaded', function() {
    // System Initialization
    const ambientSound = document.getElementById('ambientSound');
    const soundToggle = document.getElementById('soundToggle');
    const newIdentityBtn = document.getElementById('newIdentityBtn');
    const usernameDisplay = document.getElementById('username');
    const sessionTimer = document.getElementById('sessionTimer');
    const connectionCount = document.getElementById('connectionCount');
    const threatFeed = document.getElementById('threatFeed');
    const refreshFeed = document.getElementById('refreshFeed');
    const systemTimestamp = document.getElementById('systemTimestamp');
    const attackGlobe = document.getElementById('attackGlobe');

    // Sound System
    let soundEnabled = false;
    
    function toggleSound() {
        soundEnabled = !soundEnabled;
        if (soundEnabled) {
            ambientSound.volume = 0.3;
            ambientSound.play();
            soundToggle.innerHTML = '<span class="icon">🔊</span> AUDIO_ACTIVE';
        } else {
            ambientSound.pause();
            soundToggle.innerHTML = '<span class="icon">🔇</span> AUDIO_MUTED';
        }
    }
    
    soundToggle.addEventListener('click', toggleSound);

    // Identity System
    function generateUsername() {
        const prefixes = ['CYPHER', 'NEO', 'TRINITY', 'MORPHEUS', 'ZION', 'ORACLE'];
        const suffixes = ['KILLER', 'HACK', 'BYTE', 'CRASH', 'OVERLORD', 'GHOST'];
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
        sessionTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);

    // Connection Counter
    let connections = Math.floor(Math.random() * 500) + 250;
    setInterval(function() {
        connections += Math.floor(Math.random() * 5) - 2;
        connections = Math.max(100, connections);
        connectionCount.textContent = connections;
    }, 3000);

    // Threat Feed
    const threatTemplates = [
        "NEW EXPLOIT DETECTED IN {SYSTEM}",
        "{COMPANY} DATABASE BREACHED - {RECORDS} RECORDS LEAKED",
        "ZERO-DAY VULNERABILITY FOUND IN {SOFTWARE}",
        "DDoS ATTACK TARGETING {ORGANIZATION}",
        "{COUNTRY} CYBER COMMAND ISSUES ALERT"
    ];
    
    const threatPlaceholders = {
        SYSTEM: ['WINDOWS', 'LINUX', 'MACOS', 'IOS', 'ANDROID'],
        COMPANY: ['GOOGLE', 'MICROSOFT', 'FACEBOOK', 'TWITTER', 'AMAZON'],
        RECORDS: ['THOUSANDS', 'MILLIONS', 'HUNDREDS', 'TENS OF THOUSANDS'],
        SOFTWARE: ['WEB BROWSERS', 'EMAIL CLIENTS', 'VPN SOFTWARE', 'PASSWORD MANAGERS'],
        ORGANIZATION: ['BANKS', 'GOVERNMENT', 'HOSPITALS', 'UNIVERSITIES'],
        COUNTRY: ['USA', 'CHINA', 'RUSSIA', 'UK', 'GERMANY']
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
});
