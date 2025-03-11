import express from "express"

const app = express()

// API Anfragen: get, post, put, delete

//    -> "/" gibt "Hello world!" zurück
app.get("/", (req, res,) =>{
    res.send("Hello World!");
}) 

//    -> "/content" gibt HTML (Als String) zurück)
app.get("/content", (req, res,) =>{
    res.send("<h1>Hier könnte ihre Werbung stehen</h1>");
}) 
//   -> "/api/data" gibt ein JSON Objekt zurück
app.get("/api/data", (req, res) =>{
    res.json([
        { fullName: "Lukas Probst", age: 28 }, 
        { fullName: "Kevin Krassius", age: 104 }
        ])

}) 
//


app.listen(3000, () => {
    console.log("Läuft bei dir");
})

