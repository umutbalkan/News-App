const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}