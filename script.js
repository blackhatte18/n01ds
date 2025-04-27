document.addEventListener('DOMContentLoaded', function() {
    // Sound control
    const soundToggle = document.getElementById('soundToggle');
    const hackerSound = document.getElementById('hackerSound');
    let soundOn = true;
    
    // Try to play sound
    hackerSound.volume = 0.3;
    const playPromise = hackerSound.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            soundOn = false;
            soundToggle.textContent = 'SOUND: OFF (click to enable)';
        });
    }
    
    soundToggle.addEventListener('click', function() {
        soundOn = !soundOn;
        if (soundOn) {
            hackerSound.play();
            soundToggle.textContent = 'SOUND: ON';
        } else {
            hackerSound.pause();
            soundToggle.textContent = 'SOUND: OFF';
        }
    });
    
    // Visitor counter (simulated)
    let visitorCount = Math.floor(Math.random() * 500) + 1500;
    const visitorCountElement = document.getElementById('visitorCount');
    
    function updateVisitorCount() {
        visitorCount += Math.floor(Math.random() * 3) - 1;
        visitorCount = Math.max(1000, visitorCount);
        visitorCountElement.textContent = visitorCount.toString().padStart(4, '0');
    }
    
    setInterval(updateVisitorCount, 3000);
    updateVisitorCount();
    
    // User ID generation
    function generateRandomId() {
        const adjectives = ['Stealth', 'Phantom', 'Shadow', 'Crypto', 'Byte', 'Null'];
        const nouns = ['Hunter', 'Walker', 'Hacker', 'Agent', 'Node', 'Root'];
        const num = Math.floor(Math.random() * 1000);
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${adj}_${noun}_${num}`;
    }
    
    function updateUserId() {
        const newId = generateRandomId();
        document.getElementById('displayUserID').textContent = newId;
        
        // Try to set the tlk.io nickname
        const tlkFrame = document.getElementById('tlkio-frame');
        if (tlkFrame && tlkFrame.contentWindow) {
            tlkFrame.contentWindow.postMessage({
                type: 'setnick',
                nick: newId
            }, 'https://tlk.io');
        }
    }
    
    document.getElementById('newIdBtn').addEventListener('click', updateUserId);
    updateUserId();
    
    // Session timer
    let seconds = 0;
    const sessionTimeElement = document.getElementById('sessionTime');
    
    function updateSessionTime() {
        seconds++;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        sessionTimeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    setInterval(updateSessionTime, 1000);
    
    // Attack map simulation
    const globe = document.getElementById('globe');
    
    function simulateAttack() {
        const attack = document.createElement('div');
        attack.classList.add('attack');
        attack.style.top = `${Math.random() * 90 + 5}%`;
        attack.style.left = `${Math.random() * 90 + 5}%`;
        globe.appendChild(attack);
        
        setTimeout(() => {
            attack.remove();
        }, 2000);
    }
    
    setInterval(simulateAttack, 1000);
    
    // News feed updates
    const newsItems = document.getElementById('newsItems');
    const newsTemplates = [
        "New security patch released for {system}",
        "Increased {type} activity detected in {region}",
        "{company} reports data breach affecting {number} users",
        "Security researchers discover vulnerability in {software}",
        "{country} passes new cybersecurity legislation"
    ];
    
    const placeholders = {
        system: ['Windows', 'Linux', 'macOS', 'iOS', 'Android'],
        type: ['phishing', 'DDoS', 'brute force', 'malware', 'ransomware'],
        region: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
        company: ['Google', 'Microsoft', 'Facebook', 'Twitter', 'Amazon'],
        number: ['thousands', 'millions', 'hundreds', 'tens of thousands'],
        software: ['web browsers', 'email clients', 'VPN software', 'password managers'],
        country: ['USA', 'UK', 'Germany', 'China', 'Russia', 'Nigeria']
    };
    
    function generateNewsItem() {
        const template = newsTemplates[Math.floor(Math.random() * newsTemplates.length)];
        let newsText = template;
        
        for (const [key, values] of Object.entries(placeholders)) {
            newsText = newsText.replace(new RegExp(`{${key}}`, 'g'), values[Math.floor(Math.random() * values.length)]);
        }
        
        return newsText;
    }
    
    function addNewsItem() {
        const now = new Date();
        const timeString = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
        
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        
        const newsTime = document.createElement('div');
        newsTime.classList.add('news-time');
        newsTime.textContent = timeString;
        
        const newsText = document.createElement('div');
        newsText.classList.add('news-text');
        newsText.textContent = generateNewsItem();
        
        newsItem.appendChild(newsTime);
        newsItem.appendChild(newsText);
        
        newsItems.insertBefore(newsItem, newsItems.firstChild);
        
        if (newsItems.children.length > 10) {
            newsItems.removeChild(newsItems.lastChild);
        }
    }
    
    setInterval(addNewsItem, 5000);
    
    // Matrix rain effect
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
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
