const url = 'http://localhost:5001/movies';

function fetchMovies() {
    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data));
}



document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let id = document.getElementById("searchId").value;
    let title = document.getElementById("searchTitle").value;
    let genre = document.getElementById("searchGenre").value;
    let runtime = document.getElementById("searchRuntime").value;
    let release = document.getElementById("searchRelease").value;

    let query = [];
    if (id)
        query.push(`id=${id}`);
    if (title)
        query.push(`title=${title}`);
    if (genre)
        query.push(`genre=${genre}`);
    if (runtime)
        query.push(`runtime=${runtime}`);
    if (release)
        query.push(`release=${release}`);

    let queryString = query.length ? '?' + query.join('&') : '';

    fetch(`${url}/search${queryString}`)
        .then(res => res.json())
        .then(data => showResult(data));
});

function showResult(data) {
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
}