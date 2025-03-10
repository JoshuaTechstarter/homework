let my_list = ["Lukas", "Kevin", "Suheib"]
let original_list = [...my_list];

function createHTMLList(liste) {
    // Für jedes Element in der Liste wird ein 'Löschen'-Button hinzugefügt
    let htmlElements = liste.map((listItem, index) => {
        return `<li>
                    ${listItem} 
                    <button class="delete-item" onclick="removeItem(${index})">Löschen</button>
                </li>`;
    });
    // Die Listenelemente in ein <ul>-Tag verpacken
    let flattenedList = htmlElements.join("");
    let ergebnis = `<ul>${flattenedList}</ul>`;
    return ergebnis;
}

function setListContent() {
    let listDiv = document.getElementById("liste");
    let content = createHTMLList(my_list);
    listDiv.innerHTML = content;
}

function setUserInputList() {
    let userInput = document.getElementById("userInput");
    let text = userInput.value.trim(); // Entfernt führende und nachfolgende Leerzeichen
    
    // Wenn der Text nicht leer ist, füge ihn der Liste hinzu
    if (text) {
        let textList = text.split(",").map(item => item.trim()).filter(item => item !== ""); // Entferne leere Einträge
        my_list = my_list.concat(textList);
        setListContent();
    }
}

// Funktion um einzelne Elemente hinzuzufügen
function addSingleItem() {
    let singleItemInput = document.getElementById("singleItemInput");
    let newItem = singleItemInput.value.trim();
    if (newItem) {
        my_list.push(newItem);
        setListContent();
        singleItemInput.value = ''; // Eingabefeld leeren
    }
}

// Funktion um das zuletzt hinzugefügte Item zu löschen
function removeLastItem() {
    my_list.pop();
    setListContent();
}

// Funktion um einzelne Elemente zu löschen
function removeItem(index) {
    my_list.splice(index, 1);  // Entfernt das Element bei dem angegebenen Index
    setListContent();  // Liste nach der Entfernung aktualisieren
}

// Funktion zum Wiederherstellen der Liste
function restoreOriginalList() {
    my_list = [...original_list]; // Die Liste auf den ursprünglichen Zustand zurücksetzen
    setListContent();  // Liste nach der Wiederherstellung anzeigen
}