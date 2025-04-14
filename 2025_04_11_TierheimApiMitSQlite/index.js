const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("tiere.db");

app.use(express.json());


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS tiere (
    id INTEGER PRIMARY KEY,
    tierart VARCHAR(50),
    name VARCHAR(50),
    krankheit VARCHAR(100),
    age INT,
    gewicht REAL);`)
    /*db.run(`INSERT INTO tiere(tierart,name,krankheit,age,gewicht) VALUES ("Hund","Bello","husten",5,12.4)`)*/

    selectAllTiereQuery = "SELECT * FROM tiere"
    db.all(selectAllTiereQuery, (err, rows) => {
        if (err) {
            console.log(err)
        } else {
            console.log(rows)
        }
    })
    process.on("exit", () => {
        db.close()
    })
});

app.get("/", (req, res) => {
    res.send("Die API funktioniert!")
});

app.get("/tiere", (req, res) => {
    db.all(selectAllTiereQuery, (err, rows) => {
        if (err) {
            res.status(404).send("Fehler in deiner Query Anfrage")
        } else {
            res.json(rows)
        }
    })
});

app.get("tiere/:id", (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM tiere WHERE id = ?";

    db.get(sql, [id], (err, row) => {
        if (err) {
            res.status(500).send("Fehler beim Aufrufen des Tieres.")
        } else if (!row) {
            res.status(400).send("Tier nicht gefunden.")
        } else {
            res.json(row)
        }
    })
});


app.post("/tiere", (req, res) => {
    const { tierart, name, krankheit, age, gewicht } = req.body
    db.run(`INSERT INTO tiere (tierart,name,krankheit,age,gewicht) VALUES(?,?,?,?,?)`, [tierart, name, krankheit, age, gewicht])
    res.status(201).send("Tier wurde erfolgreich hinzugefügt")
});

app.put("/tiere/:id", (req, res) => {
    const id = req.params.id
    const { tierart, name, krankheit, age, gewicht } = req.body



    const sql = `
UPDATE tiere
SET tierart = ?, name = ?, krankheit = ?, age = ?, gewicht = ? 
WHERE id = ?
`;

    db.run(sql, [tierart, name, krankheit, age, gewicht, id], function (err) {
        if (err) {
            res.status(500).send("Fehler beim bearbeiten des Tiers.")
        } else if (this.changes === 0) {
            res.status(404).send("Tier nicht gefunden")
        } else {
            const selectSql = "SELECT * FROM tiere WHERE id = ?";
            db.get(selectSql, [id], (err, row) => {
                if (err) {
                    res.status(500).send("Fehler beim Abrufen des bearbeiteten Tiers.");
                } else {
                    res.json(row);
                }
            })
        }
    })

});


app.delete("/tiere/:id", (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM tiere WHERE id = ?"

    db.run(sql, [id], function (err) {
        if (err) {
            res.status(500).send("Fehler beim Löschen des Tiers.");
        } else if (this.changes === 0) {
            res.status(404).send("Tier nicht gefunden.");
        } else {
            res.send("Tier wurde erfolgreich gelöscht.");
        }
    })
});


app.listen(3000, () => {
    console.log("Der Server läuft 🐾");
});




