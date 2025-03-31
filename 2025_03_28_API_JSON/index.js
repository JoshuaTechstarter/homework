const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
const cors = require('cors'); // Add at top with other requires
app.use(cors()); // Add this right after creating your app

function readFile() {
    try {
        const data = fs.readFileSync("movies.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading file:", error);
        throw error;
    }
}

function writeFile(data) {
    try {
        fs.writeFileSync("movies.json", JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error writing file:", error);
        throw error;
    }
}

// GET route
app.get("/movies", (req, res) => {
    try {
        const movies = readFile();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// POST route
app.post("/movies", (req, res) => {
    try {
        const movies = readFile();
        const { title, genre, runtime, release } = req.body;

        if (!title || !genre || !runtime || !release) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newMovie = {
            id: movies.length + 1,
            title: title,
            genre: genre,
            runtime: runtime,
            release: release,
        };
        movies.push(newMovie);
        writeFile(movies);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// PUT route
app.put("/movies/:id", (req, res) => {
    try {
        const id = req.params.id;
        const movies = readFile();
        const { title, genre, runtime, release } = req.body;
        const foundMovie = movies.find(movie => movie.id == id);

        if (!foundMovie) {
            return res.status(404).json({ error: "Movie not found" });
        }

        if (title) {
            foundMovie.title = title;
        }
        if (genre) {
            foundMovie.genre = genre;
        }
        if (runtime) {
            foundMovie.runtime = runtime;
        }
        if (release) {
            foundMovie.release = release;
        }

        writeFile(movies);
        res.json(foundMovie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// DELETE
app.delete("/movies/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const movies = readFile();
        const index = movies.findIndex(movie => movie.id == id);

        if (index === -1) {
            return res.status(404).json({ error: "Movie not found" });
        }

        const deletedMovie = movies.splice(index, 1);
        writeFile(movies);
        res.json("erfolgreich gelöscht " + deletedMovie[0].title);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// QUERY
app.get("/movies/search", (req, res) => {
    try {
        const movies = readFile();
        const { id, title, genre, runtime, release } = req.query


        let foundMovies = movies;

        if (id) {
            foundMovies = foundMovies.filter((movie) => movie.id == id);
        }
        if (title) {
            foundMovies = foundMovies.filter((movie) => movie.title == title);
        }
        if (genre) {
            foundMovies = foundMovies.filter((movie) => movie.genre == genre);
        }
        if (runtime) {
            foundMovies = foundMovies.filter((movie) => movie.runtime == runtime);
        }
        if (release) {
            foundMovies = foundMovies.filter((movie) => movie.release == release);
        }

        if (foundMovies.length === 0) {
            res.json("No movies found matching the criteria");
        } else {
            res.json(foundMovies);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(5001, () => {
    console.log("Der Server läuft 🎬");
});
