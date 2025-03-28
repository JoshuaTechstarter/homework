const express = require("express");
const app = express();

const animals = [
    {id: 1, name: "Tiam", species: "Hund", age: "2"},
    {id: 2, name: "Tiam", species: "Hund", age: "2"},
    {id: 3, name: "Jean-Luc", species: "Katze", age: "8"},
    {id: 4, name: "Nemo", species: "Fisch", age: "1.5"},
    {id: 5, name: "Coco", species: "Vogel", age: "12"}
];

/*1.    GET /tiere
→ Gibt eine Liste aller Tiere zurück*/
app.get("/animals", (req, res) => {
    res.send(animals);
})

/*   2.    GET /tiere/search?art=hund
→ Filtert nach einer Tierart (z. B. Hund, Katze)*/
app.get("/animals/search",(req, res) => {
    const type = req.query.species;
    const foundSpecies = animals.filter(animal => animal.species == type)
    res.json(foundSpecies);
} )

/*3.    GET /tiere/:id
→ Gibt nur das Tier mit der angegebenen ID zurück*/
app.get("/animals/:id", (req, res) => {
    const id = Number(req.params.id);
    const foundId = animals.find(animal => animal.id === id);
    console.log(typeof(id))
    res.json(foundId);
})

/*4.    POST /tiere
→ Fügt ein neues Tier zur Liste hinzu (über JSON-Body)*/
app.use(express.json());
app.post("/animals", (req, res) =>{
    const  {name, species, age} = req.body;
    const newAnimal = {
       id: animals.length + 1,
       name: name, 
       species: species, 
       age: age, 
    }
    animals.push(newAnimal)

    res.json(animals);
})

app.listen(5051, () => {
    console.log("Der Server läuft 🐾");
  });