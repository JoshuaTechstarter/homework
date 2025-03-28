const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

/*
DELETE /books/:id*/

//2.Hilfsfunktionen: readData() und writeData()

function readFile() {
    const data = fs.readFileSync("movies.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("movies.json", JSON.stringify(data, null, 2));
}

// GET route
app.get("/movies", (req, res) => {
    const movies = readFile();
    res.json(movies)
})

// POST route
app.post("/movies", (req, res) => {
    const movies = readFile();
    const { title, genre, runtime, release } = req.body
    const newMovie = {
        id: movies.length + 1,
        title: title,
        genre: genre,
        runtime: runtime,
        release: release,
    }
    movies.push(newMovie)
    writeFile(movies)
    res.status(201).json(newMovie)
})

// PUT route
app.put("/movies/:id", (req, res) => {
    const id = req.params.id;
    const movies = readFile();
    const { title, genre, runtime, release } = req.body
    const foundMovie = movies.find(movie => movie.id == id)
    if (title) {
        foundMovie.title = title
    }
    if (genre) {
        foundMovie.genre = genre
    }
    if (runtime) {
        foundMovie.runtime = runtime
    }
    if (release) {
        foundMovie.release = release
    }
    writeFile(movies)
    res.json(foundMovie)
})

// DELETE
app.delete("/movies/:id", (req, res) => {
    const id = req.params.id;
    const movies = readFile();
    const index = movies.findIndex(movie => movie.id == id)
    const deletedMovie = movies.splice(index, 1)
    writeFile(movies)
    res.json("erfolgreich gelöscht " + deletedMovie[0])
})


// QUERY
app.get("/movies/search", (req, res) => {
    const movies = readFile();
    const id = req.query.id;
    let foundMovies = movies.filter((movies) => movies.id == id);
    if (foundMovies.length === 0) {
        const title = req.query.title;
        foundMovies = movies.filter((movies) => movies.title == title);
    } if (foundMovies.length === 0) {
        const genre = req.query.genre;
        foundMovies = movies.filter((movies) => movies.genre == genre);
    } if (foundMovies.length === 0) {
        const runtime = req.query.genre;
        foundMovies = movies.filter((movies) => movies.runtime == runtime);
    } if (foundMovies.length === 0) {
        const release = req.query.release;
        foundMovies = movies.filter((movies) => movies.release == release);
    }
    res.json(foundMovies)
})


app.listen(5001, () => {
    console.log("Der Server läuft 🎬");
});
