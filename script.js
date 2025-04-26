// Matrix Rain Background Effect (using matrix.js)
window.onload = function() {
    var canvas = document.getElementById("matrix");
    var ctx = canvas.getContext("2d");
    var columns = canvas.width = window.innerWidth;
    var rows = canvas.height = window.innerHeight;
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var fontSize = 10;
    var drops = [];

    for (var x = 0; x < columns; x++) {
        drops[x] = 0;
    }

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, columns, rows);
        ctx.fillStyle = "#0f0";
        ctx.font = fontSize + "px monospace";

        for (var i = 0; i < drops.length; i++) {
            var text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > rows && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 35);
};

// Tech News Section - Fetching News
const newsList = document.getElementById("news-list");

// Fetch latest tech news from an API (example from NewsAPI)
async function fetchTechNews() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?category=technology&apiKey=YOUR_API_KEY");
    const data = await response.json();
    
    // Display news items
    const articles = data.articles;
    newsList.innerHTML = ''; // Clear previous news
    articles.forEach(article => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
        newsList.appendChild(li);
    });
}

// Call the function to load news
fetchTechNews();

// Automatically refresh the news every 10 minutes
setInterval(fetchTechNews, 600000);
