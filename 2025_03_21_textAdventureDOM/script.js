// Matrix-Effekt im Hintergrund (sourced von Marvin via ChatGPT)
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-/~{[|`]}';
const font_size = 10;
const columns = canvas.width / font_size;
const drops = Array.from({ length: columns }).fill(0);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = font_size + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
// Matrix-Effekt läuft kontinuierlich im Hintergrund
setInterval(draw, 50);

// Spielerobjekt
let player = {
    name: "",
    pill: "",
    trustedHacker: false,
    merovingianMet: false,
    isCrew: false,
    keymakerTaken: false,
    architectMet: false,
    oracleMet: false,
    sentinelHacked: false
};

// Mögliche Spielzustände:
let gameState = "start";

// Namenseingabe per Input-Feld
function handleName() {
    const inputField = document.getElementById("input-field");
    let name = inputField.value.trim();
    if (name === "") return;
    player.name = name;
    updateStory(`${player.name}, wach auf!`);
    if (player.name.toLowerCase() === "kevin") {
        updateStory(`Hi ${player.name}!`);
    }
    // Entferne die Input-Area und wechsle zu Buttons
    document.getElementById("input-area").innerHTML = "";
    gameState = "choosePill";
    updateQuestion("Das ist deine letzte Chance. Wähle: rote oder blaue Pille?");
    updateButtons(["rot", "blau"]);
}

// Erzeugt Buttons anhand eines Options-Arrays und passt Farbe an (für rot und blau)
function updateButtons(options) {
    const buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        // Spezielle Farbe für rote und blaue Pille
        if (option.toLowerCase() === "rot") {
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        } else if (option.toLowerCase() === "blau") {
            btn.style.backgroundColor = "blue";
            btn.style.color = "white";
        }
        btn.addEventListener("click", () => handleChoice(option.toLowerCase()));
        buttonsDiv.appendChild(btn);
    });
}

// Neueste Story-Einträge werden oben eingefügt
function updateStory(text) {
    const storyDiv = document.getElementById("story");
    storyDiv.innerHTML = `<p>${text}</p>` + storyDiv.innerHTML;
}

function updateQuestion(text) {
    document.getElementById("question").innerText = text;
}

// Überprüft, ob der Spieler "neustart" wählt
function handleChoice(choice) {
    if (choice === "neustart") {
        restartGame();
    }

    // Zustand: Pillenwahl
    if (gameState === "choosePill") {
        if (choice === "rot") {
            player.pill = "rot";
            updateStory("Du nimmst die rote Pille – du bleibst im Wunderland und ich zeige dir, wie tief der Kaninchenbau wirklich ist.");
            gameState = "enterMatrix";
            updateQuestion("Möchtest du der Crew der Nebuchadnezzar beitreten oder alleine weitergehen?");
            updateButtons(["crew", "alleine"]);
        } else if (choice === "blau") {
            player.pill = "blau";
            updateStory("Du nimmst die blaue Pille – die Geschichte endet, du wachst in deinem Bett auf und glaubst, was immer du glauben willst.");
            gameState = "exitMatrix";
            updateQuestion("Möchtest du ein Leben in scheinbarer Sicherheit führen oder an der Realität zweifeln?");
            updateButtons(["sicherheit", "zweifeln"]);
        } else {
            updateQuestion("Ungültige Wahl. Bitte wähle 'rot' oder 'blau'.");
            updateButtons(["rot", "blau"]);
        }
    }
    // Zustand: Matrix betreten (Crew oder alleine)
    else if (gameState === "enterMatrix") {
        if (choice === "crew" || choice === "alleine") {
            player.isCrew = (choice === "crew");
            updateStory(`Du hast dich entschieden: ${player.isCrew ? "Crew-Mitglied" : "Einzelgänger"}.`);
            gameState = "mission";
            updateQuestion("Wähle eine Begegnung:");
            updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
        } else {
            updateQuestion("Ungültige Wahl. Bitte wähle 'crew' oder 'alleine'.");
            updateButtons(["crew", "alleine"]);
        }
    }
    // Zustand: Matrix verlassen (Exit)
    else if (gameState === "exitMatrix") {
        if (choice === "sicherheit") {
            updateStory("Du akzeptierst dein Schicksal und lebst ein ruhiges Leben in der Illusion.");
            endGame("Spiel beendet.");
        } else if (choice === "zweifeln") {
            updateStory("Du beginnst zu zweifeln – aber die Wahrheit bleibt dir für immer verborgen.");
            endGame("Spiel beendet.");
        } else {
            updateQuestion("Ungültige Wahl. Bitte wähle 'sicherheit' oder 'zweifeln'.");
            updateButtons(["sicherheit", "zweifeln"]);
        }
    }
    // Zustand: Missionen auswählen
    else if (gameState === "mission") {
        let validMissions = ["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"];
        if (validMissions.includes(choice)) {
            // Voraussetzungen prüfen
            if (choice === "architekt" && !player.keymakerTaken) {
                updateStory("Dir fehlt der richtige Schlüssel, um den Architekten zu treffen.");
                updateQuestion("Wähle eine andere Begegnung:");
                updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
            } else if (choice === "orakel" && !player.merovingianMet) {
                updateStory("Du kennst den Weg zum Orakel noch nicht.");
                updateQuestion("Wähle eine andere Begegnung:");
                updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
            } else if (choice === "merowinger" && !player.sentinelHacked) {
                updateStory("Mit leeren Händen wird dich der Merowinger nicht empfangen.");
                updateQuestion("Wähle eine andere Begegnung:");
                updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
            } else {
                // Wechsel in den entsprechenden Encounter-Zustand
                gameState = (choice === "schlüsselmacher" ? "keymakerEncounter" : choice + "Encounter");
                updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
                processEncounter();
            }
        } else {
            updateButtons(validMissions);
        }
    }
    // Zustand: Agenten-Begegnung
    else if (gameState === "agentenEncounter") {
        if (choice === "kämpfen") {
            if (player.isCrew && (player.architectMet && player.oracleMet)) {
                updateStory("Mithilfe von Morpheus, Trinity, dem Wissen des Orakels und des Architekten besiegst du Agent Smith nach einem harten Kampf!");
                winGame("Herzlichen Glückwunsch, du hast die Matrix bezwungen!");
            } else {
                updateStory("Ohne Unterstützung hast du keine Chance gegen Agent Smith! Dein Geist bleibt für immer in der Matrix gefangen.");
                endGame("Spiel beendet.");
            }
        } else if (choice === "fliehen") {
            updateStory("Du schaffst es gerade so, Agent Smith zu entkommen.");
            gameState = "mission";
            updateQuestion("Wähle eine weitere Begegnung:");
            updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
        } else {
            updateQuestion("Ungültige Wahl. Wähle 'kämpfen' oder 'fliehen'.");
            updateButtons(["kämpfen", "fliehen"]);
        }
    }
    // Zustand: Sentinel-Begegnung
    else if (gameState === "sentinelEncounter") {
        if (choice === "ablenken") {
            updateStory("Du hast den Sentinel erfolgreich abgelenkt.");
            gameState = "mission";
            updateQuestion("Wähle eine weitere Begegnung:");
            updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
        } else if (choice === "hacken") {
            if (player.trustedHacker) {
                updateStory("Mithilfe des abtrünnigen Hackers hast du den Sentinel gehackt – er unterstützt dich jetzt.");
                player.sentinelHacked = true;
            } else {
                updateStory("Du benötigst Hilfe beim Hacken eines Sentinels.");
                player.sentinelHacked = false;
            }
            gameState = "mission";
            updateQuestion("Wähle eine weitere Begegnung:");
            updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "orakel", "architekt"]);
        } else {
            updateQuestion("Ungültige Wahl. Wähle 'ablenken' oder 'hacken'.");
            updateButtons(["ablenken", "hacken"]);
        }
    }
    // Zustand: Hacker-Begegnung
    else if (gameState === "hackerEncounter") {
        if (choice === "vertrauen") {
            updateStory("Du vertraust dem abtrünnigen Hacker und erhältst seine Unterstützung.");
            player.trustedHacker = true;
        } else if (choice === "misstrauen") {
            updateStory("Du misstraust dem Hacker und verlierst möglicherweise wichtige Informationen.");
            player.trustedHacker = false;
        } else {
            updateQuestion("Ungültige Wahl. Wähle 'vertrauen' oder 'misstrauen'.");
            updateButtons(["vertrauen", "misstrauen"]);
        }
        gameState = "mission";
        updateQuestion("Wähle eine weitere Begegnung:");
        updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
    }
    // Zustand: Merowinger-Begegnung
    else if (gameState === "merowingerEncounter") {
        if (choice === "annehmen") {
            updateStory("Du gehst den Handel mit dem Merowinger ein. Neue Möglichkeiten eröffnen sich dir.");
            player.merovingianMet = true;
        } else if (choice === "ablehnen") {
            updateStory("Du gehst keinen Handel mit dem Merowinger ein.");
            player.merovingianMet = false;
        } else {
            updateQuestion("Ungültige Wahl. Wähle 'annehmen' oder 'ablehnen'.");
            updateButtons(["annehmen", "ablehnen"]);
        }
        gameState = "mission";
        updateQuestion("Wähle eine weitere Begegnung:");
        updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
    }
    // Zustand: Schlüsselmacher (Keymaker) Begegnung
    else if (gameState === "keymakerEncounter") {
        if (choice === "nehmen") {
            updateStory("Du nimmst den Schlüssel an. Neue Möglichkeiten öffnen sich.");
            player.keymakerTaken = true;
        } else if (choice === "ablehnen") {
            updateStory("Du lehnst den Schlüssel ab. Ohne den Schlüssel kannst du den Architekten nicht treffen.");
            player.keymakerTaken = false;
            endGame("Ohne den Schlüssel ist deine Reise beendet.");
        } else {
            updateQuestion("Ungültige Wahl. Wähle 'nehmen' oder 'ablehnen'.");
            updateButtons(["nehmen", "ablehnen"]);
        }
        gameState = "mission";
        updateQuestion("Wähle eine weitere Begegnung:");
        updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
    }
    // Zustand: Architekt-Begegnung
    else if (gameState === "architectEncounter") {
        if (choice === "akzeptieren") {
            updateStory("Du akzeptierst das Wissen des Architekten. Deine Realität erweitert sich.");
            player.architectMet = true;
        } else if (choice === "ablehnen") {
            updateStory("Du bewahrst deinen freien Willen, doch die Matrix bleibt rätselhaft.");
            player.architectMet = true;
        } else {
            updateButtons(["akzeptieren", "ablehnen"]);
        }
        gameState = "mission";
        updateQuestion("Wähle eine weitere Begegnung:");
        updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
    }
    // Zustand: Orakel-Begegnung
    else if (gameState === "orakelEncounter") {
        if (choice === "zukunft") {
            updateStory("Das Orakel zeigt dir Visionen der Zukunft.");
            player.oracleMet = true;
        } else if (choice === "vergangenheit") {
            updateStory("Das Orakel enthüllt dir Geheimnisse deiner Vergangenheit.");
            player.oracleMet = true;
        } else {
            updateButtons(["zukunft", "vergangenheit"]);
        }
        gameState = "mission";
        updateQuestion("Wähle eine weitere Begegnung:");
        updateButtons(["agenten", "hacker", "sentinel", "merowinger", "schlüsselmacher", "architekt", "orakel"]);
    }
}

// Zeigt bei Beginn eines Encounters die passenden Buttons an
function processEncounter() {
    if (gameState === "agentenEncounter") {
        updateQuestion("Agent Smith erscheint! Wähle: kämpfen oder fliehen?");
        updateButtons(["kämpfen", "fliehen"]);
    } else if (gameState === "sentinelEncounter") {
        updateQuestion("Ein Sentinel nähert sich! Wähle: ablenken oder hacken?");
        updateButtons(["ablenken", "hacken"]);
    } else if (gameState === "hackerEncounter") {
        updateQuestion("Ein abtrünniger Hacker bietet dir seine Dienste an. Vertrau ihm?");
        updateButtons(["vertrauen", "misstrauen"]);
    } else if (gameState === "merowingerEncounter") {
        updateQuestion("Der Merowinger sagt: 'Alles hat seinen Preis.' Nimmst du sein Angebot an?");
        updateButtons(["annehmen", "ablehnen"]);
    } else if (gameState === "architectEncounter") {
        updateQuestion("Der Architekt erklärt: 'Du bist Teil des großen Plans.' Akzeptierst du sein Wissen?");
        updateButtons(["akzeptieren", "ablehnen"]);
    } else if (gameState === "keymakerEncounter") {
        updateQuestion("Der Schlüsselmacher bietet dir einen Schlüssel an. Nimmst du ihn?");
        updateButtons(["nehmen", "ablehnen"]);
    } else if (gameState === "orakelEncounter") {
        updateQuestion("Das Orakel fragt: Willst du die Zukunft oder deine Vergangenheit erfahren?");
        updateButtons(["zukunft", "vergangenheit"]);
    }
}

function endGame(message) {
    updateStory(message);
    updateQuestion("<Spiel beendet>");
    updateButtons(["neustart"]);
}

function winGame(message) {
    updateStory(message);
    updateQuestion("<Spiel gewonnen>");
    updateButtons(["neustart"]);
}

// Setzt das Spiel zurück und startet neu
function restartGame() {
    player = {
        name: "",
        pill: "",
        trustedHacker: false,
        merovingianMet: false,
        isCrew: false,
        keymakerTaken: false,
        architectMet: false,
        oracleMet: false,
        sentinelHacked: false
    };
    gameState = "start";
    document.getElementById("story").innerHTML = "";
    updateQuestion("Gib deinen Namen ein:");
    document.getElementById("input-area").innerHTML = '<input type="text" id="input-field" placeholder="Dein Name"><button onclick="handleName()">Bestätigen</button>';
    document.getElementById("buttons").innerHTML = "";
}