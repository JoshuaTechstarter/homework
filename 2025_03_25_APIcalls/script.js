
    function searchData() {
  const input = document.getElementById("userInput").value;
  const category = document.getElementById("kategorie").value;
  const output = document.getElementById("output");
  
  // Ausgabe zurücksetzen
  output.innerHTML = "";
  
  // Falls keine Kategorie gewählt wurde
  if (category === "empty") {
    output.innerHTML = "Bitte wählen Sie eine Kategorie aus.";
    return;
  }
  
  // URL je nach Kategorie zusammenbauen
  let url = "";
  switch (category) {
    case "characters":
      url = "https://swapi.dev/api/people?search=" + input;
      break;
    case "starships":
      url = "https://swapi.dev/api/starships?search=" + input;
      break;
    case "species":
      url = "https://swapi.dev/api/species?search=" + input;
      break;
    case "planets":
      url = "https://swapi.dev/api/planets?search=" + input;
      break;
    default:
      output.innerHTML = "Ungültige Kategorie.";
      return;
  }
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.results || data.results.length === 0) {
        output.innerHTML = "Keine Ergebnisse gefunden.";
        return;
      }
      
      const firstResult = data.results[0];
      let html = `<h2>${firstResult.name}</h2>`;
      
      // Abhängig von der Kategorie unterschiedliche Details anzeigen
      if (category === "characters") {
        html += `
          <p>Height: ${firstResult.height} cm</p>
          <p>Weight: ${firstResult.mass} kg</p>
          <p>Haircolor: ${firstResult.hair_color}</p>
          <p>Eyecolor: ${firstResult.eye_color}</p>`;
          
        fetch(firstResult.homeworld)
          .then(res => res.json())
          .then(planet => {
            const homeWorldInfo = document.createElement("p");
            homeWorldInfo.textContent = `Homeworld: ${planet.name}`;
            output.innerHTML += homeWorldInfo.outerHTML;
          });
      } else if (category === "starships") {
        html += `
          <p>Model: ${firstResult.model}</p>
          <p>Manufacturer: ${firstResult.manufacturer}</p>
          <p>Costs (in Galactic Credits): ${firstResult.cost_in_credits}ᖬ</p>
          <p>Length: ${firstResult.length} m</p>`;
      } else if (category === "species") {
        html += `
          <p>Classifikation: ${firstResult.classification}</p>
            <p>Designation: ${firstResult.designation}</p>
            <p>Average Height: ${firstResult.average_height} m</p>
            <p>Skincolor: ${firstResult.skin_colors}</p>
            <p>Language: ${firstResult.language}</p>`;
            fetch(firstResult.homeworld)
          .then(res => res.json())
          .then(planet => {
            const homeWorldInfo = document.createElement("p");
            homeWorldInfo.textContent = `Homeworld: ${planet.name}`;
            output.innerHTML += homeWorldInfo.outerHTML;
          });
        
      } else if (category === "planets") {
        html += `
            <p>Climate: ${firstResult.climate}</p>
            <p>Terrain: ${firstResult.terrain}</p>`;
      }
      
      output.innerHTML = html;
    })
    .catch(error => {
      output.innerHTML = "Ein Fehler ist aufgetreten: " + error;
    });
}

// Event-Listener für den Such-Button
const button = document.getElementById("searchButton");
button.addEventListener("click", searchData);


