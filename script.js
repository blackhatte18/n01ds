var typed = new Typed('#typing', {
    strings: ["> Connecting to NO1DS Terminal...", "> Access Granted."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false
});

async function fetchNews() {
    const apiKey = ' f080820976234fff8a68579ae6c741f1';
    const url = `https://newsapi.org/v2/top-headlines?category=technology&q=hacker&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const newsList = document.getElementById('news');
        data.articles.slice(0, 5).forEach(article => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
            newsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
fetchNews();
