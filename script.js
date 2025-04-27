// Example fetching hacker news from your NewsAPI
document.addEventListener("DOMContentLoaded", function() {
    const newsList = document.getElementById('news-list');

    fetch('https://newsapi.org/v2/everything?q=hacker&sortBy=publishedAt&apiKey=f080820976234fff8a68579ae6c741f1')
    .then(response => response.json())
    .then(data => {
        data.articles.slice(0, 5).forEach(article => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
            newsList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error);
        newsList.innerHTML = '<li>Unable to load news at this time.</li>';
    });
});
