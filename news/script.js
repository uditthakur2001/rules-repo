const newsApiUrls = [
'https://api.thenewsapi.com/v1/news/top?api_token=ifnTw1TP5wQ2adqAV0c0kib9b2JaEu3a5AWuyMeq&locale=us&limit=3',
'https://api.thenewsapi.com/v1/news/all?api_token=ifnTw1TP5wQ2adqAV0c0kib9b2JaEu3a5AWuyMeq&language=en&limit=3',
'https://api.thenewsapi.com/v1/news/top?api_token=ifnTw1TP5wQ2adqAV0c0kib9b2JaEu3a5AWuyMeq&locale=us&limit=3',

];

async function fetchNews(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        createCards(data.data.slice(0, 3));
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

function createCards(newsArticles) {
    const container = document.getElementById('card-container');

    newsArticles.forEach(({ title, description, image_url, url }) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${image_url}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
            <button onclick="window.open('${url}', '_blank')">Read More</button>
        `;
        container.appendChild(card);
    });
}

newsApiUrls.forEach(url => fetchNews(url));



fetchNews(newsApiUrl);
