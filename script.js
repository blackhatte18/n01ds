// ADMIN CONFIG (Change these!)
const ADMIN_PASSWORD = "n01dswereneverhere"; // Change this!
const ADMIN_COOKIE_NAME = "cyber_terminal_auth";

// Admin Tools
function generateRandomPassword() {
    return Math.random().toString(36).slice(-8) + "-" + Math.random().toString(36).slice(-8);
}

function checkAdminAuth() {
    // Check cookie for existing auth
    const authCookie = document.cookie.split('; ').find(row => row.startsWith(ADMIN_COOKIE_NAME));
    if (authCookie && authCookie.split('=')[1] === "true") {
        enableAdminFeatures();
        return true;
    }
    return false;
}

function enableAdminFeatures() {
    document.querySelectorAll('.admin-only').forEach(el => {
        el.style.display = 'block';
    });
    document.getElementById('admin-status').textContent = "> ADMIN MODE ACTIVATED";
    document.getElementById('admin-status').style.color = "#f00";
    document.getElementById('admin-login').style.display = 'none';
    
    // Enable admin tools
    document.getElementById('scan-btn').addEventListener('click', () => {
        const ip = document.getElementById('target-ip').value;
        if (ip) {
            document.getElementById('scan-results').innerHTML = 
                `<p>> Scanning ${ip}...</p>
                 <p>> Port 22: SSH (Open)</p>
                 <p>> Port 80: HTTP (Apache)</p>
                 <p>> Vulnerabilities detected!</p>`;
        }
    });
}

// Password Authentication
document.getElementById('login-btn').addEventListener('click', () => {
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        // Set auth cookie (expires in 1 day)
        document.cookie = `${ADMIN_COOKIE_NAME}=true; max-age=${60*60*24}; path=/;`;
        enableAdminFeatures();
    } else {
        alert("ACCESS DENIED");
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (!checkAdminAuth()) {
        document.getElementById('admin-login').style.display = 'flex';
    }
    
    // ... (rest of your initialization code)
});
