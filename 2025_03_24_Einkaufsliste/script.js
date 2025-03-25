const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const modeToggle = document.getElementById("modeToggle");
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");

// Funktion zur Aktualisierung des Gesamtpreises
function updatePreis() {
  let summe = 0;
  // Nur markierte (gecheckte) Artikel werden gezählt
  document.querySelectorAll(".artikel-checkbox:checked").forEach(checkbox => {
    summe += parseFloat(checkbox.value);
  });
  gesamt.textContent = `Gesamt: ${summe.toFixed(2)}€`;
}

// Hilfsfunktion: Liefert Emoji zur Kategorie
function getCategoryEmoji(category) {
  switch (category) {
    case "fruits":
      return "🍎";
    case "vegetables":
      return "🥦";
    case "drogerie":
      return "🧴";
    default:
      return "";
  }
}

// Event Listener für den "Hinzufügen"-Button
addButton.addEventListener("click", () => {
  // Eingabefelder abrufen
  const artikelInput = document.getElementById("artikel");
  const anzahlInput = document.getElementById("anzahl");
  const preisInput = document.getElementById("preis");
  const kategorieSelect = document.getElementById("kategorie");

  // Werte aus den Eingabefeldern
  const artikelValue = artikelInput.value.trim();
  const anzahlValue = parseInt(anzahlInput.value);
  const preisValue = parseFloat(preisInput.value);
  const kategorieValue = kategorieSelect.value;

  // Überprüfung, ob alle Felder ausgefüllt sind
  if (!artikelValue || !anzahlInput.value || !preisInput.value || kategorieValue === "empty") {
    [artikelInput, anzahlInput, preisInput, kategorieSelect].forEach(input => {
      input.classList.toggle("error", !input.value || (input === kategorieSelect && input.value === "empty"));
    });
    return; // Funktion beenden, falls Eingabe fehlt
  }

  // Berechnung des Gesamtpreises für den aktuellen Artikel
  const gesamtPreis = anzahlValue * preisValue;

  // Prüfen, ob bereits ein Artikel mit gleichem Namen und Stückpreis existiert
  let duplicateFound = false;
  const liElements = liste.getElementsByTagName("li");
  for (let li of liElements) {
    if (li.dataset.name === artikelValue && li.dataset.price === preisValue.toString() && li.dataset.kategorie === kategorieValue) {
      // Artikel existiert bereits: Menge erhöhen und Preis neu berechnen
      let aktuelleMenge = parseInt(li.dataset.quantity);
      const neueMenge = aktuelleMenge + anzahlValue;
      li.dataset.quantity = neueMenge;
      const neuerGesamtPreis = neueMenge * preisValue;

      // Checkbox aktualisieren
      const checkbox = li.querySelector("input[type='checkbox']");
      checkbox.value = neuerGesamtPreis;

      // Li-Inhalt neu aufbauen (Text und Emoji)
      li.innerHTML = "";
      li.appendChild(checkbox);
      li.append(` ${neueMenge} x ${artikelValue}: ${neuerGesamtPreis.toFixed(2)}€ ${getCategoryEmoji(kategorieValue)} `);

      // Löschen-Button hinzufügen
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", () => {
        li.remove();
        updatePreis();
      });
      li.appendChild(deleteButton);

      duplicateFound = true;
      break;
    }
  }

  // Falls kein Duplikat gefunden wurde, neuen Eintrag erstellen
  if (!duplicateFound) {
    // Neues Listenelement erstellen und benötigte Daten speichern
    const li = document.createElement("li");
    li.dataset.name = artikelValue;
    li.dataset.price = preisValue.toString();
    li.dataset.quantity = anzahlValue;
    li.dataset.kategorie = kategorieValue;

    // Checkbox zum Abhaken des Artikels
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("artikel-checkbox");
    checkbox.value = gesamtPreis;
    checkbox.addEventListener("change", updatePreis);

    // Li-Inhalt zusammenbauen mit Emoji der Kategorie
    li.appendChild(checkbox);
    li.append(` ${anzahlValue} x ${artikelValue}: ${gesamtPreis.toFixed(2)}€ ${getCategoryEmoji(kategorieValue)} `);

    // Löschen-Button erstellen
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      li.remove();
      updatePreis();
    });
    li.appendChild(deleteButton);
    liste.appendChild(li);
  }

  // Eingabefelder leeren und Fehler-Markierung entfernen
  [artikelInput, anzahlInput, preisInput, kategorieSelect].forEach(input => {
    input.value = "";
    input.classList.remove("error");
  });
  // Setze Dropdown wieder auf Standardwert
  kategorieSelect.value = "empty";
});

// Event Listener für den "Liste leeren"-Button
clearButton.addEventListener("click", () => {
  liste.innerHTML = "";
  gesamt.textContent = "Gesamt: 0€";
});

// Event Listener für den Lightmode/Darkmode-Button
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Enter Taste enabled
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
      event.preventDefault();
      addButton.click();
  }
});
