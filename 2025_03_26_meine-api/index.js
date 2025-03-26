const express = require("express");
const sillyName = require("sillyname");
const joke = require("awesome-dev-jokes");

const app = express();

app.get("/", (req, res) => {
    res.send("Willkommen bei meiner eigenen API!");
  });
  
  app.get("/data", (req, res) => {
    res.json([
      { id: 1, name: "Joshua" },
      { id: 2, name: "Mete" }
    ]);
  });

app.get("/kevin", (req, res) => {
    res.send("Hi Kevin!");
});

app.get("/joke", (req, res) => {
  const joke = joke.getRandomJoke();
  res.send(joke);
});

app.get("/randomname", (req, res) => {
  res.send(`Mein zufälliger Name ist: ${sillyName()}`);
})
  
  app.listen(5050, () => {
    console.log("Stabil auf Port 5050 Bruder 👌");
  });