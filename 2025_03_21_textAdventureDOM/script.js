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

let player = {};
let gameState = "start";

function resetPlayer() {
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
}

function handleName() {
    const inputField = document.getElementById("input-field");
    if (!inputField.value.trim()) return;
    
    player.name = inputField.value.trim();
    updateStory(`${player.name}, wach auf!`);
    
    if (player.name.toLowerCase() === "kevin") updateStory(`Hi ${player.name}!`);
    
    document.getElementById("input-area").innerHTML = "";
    nextState("choosePill", "Das ist deine letzte Chance. Wähle: rote oder blaue Pille?", ["rot", "blau"]);
}

function updateButtons(options) {
    console.log("Updating buttons:", options);
    
    const buttonsDiv = document.getElementById("buttons");
    if (!buttonsDiv) {
        console.error("Fehler: buttons div nicht gefunden!");
        return;
    }
    
    buttonsDiv.innerHTML = "";
    
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.style.color = "white";
        if (option === "rot") btn.style.backgroundColor = "red";
        if (option === "blau") btn.style.backgroundColor = "blue";
        btn.addEventListener("click", () => handleChoice(option));
        buttonsDiv.appendChild(btn);
    });
}

function updateStory(text) {
    document.getElementById("story").innerHTML = `<p>${text}</p>` + document.getElementById("story").innerHTML;
}

function updateQuestion(text) {
    document.getElementById("question").innerText = text;
}

function nextState(state, question, options) {
    console.log(`Neuer State: ${state}`);
    
    gameState = state;
    updateQuestion(question);
    updateButtons(options);
}

function handleChoice(choice) {
    console.log(`Choice: ${choice} bei State: ${gameState}`);
    
    if (choice === "neustart") return restartGame();

    const choices = {
        choosePill: {
            rot: () => {
                updateStory("Du nimmst die rote Pille – du bleibst im Wunderland und ich zeige dir, wie tief der Kaninchenbau wirklich ist.");
                nextState("enterMatrix", "Möchtest du der Crew beitreten oder alleine weitergehen?", ["crew", "alleine"]);
            },
            blau: () => {
                updateStory("Du nimmst die blaue Pille – die Geschichte endet, du wachst in deinem Bett auf und glaubst, was immer du glauben willst.");
                nextState("exitMatrix", "Möchtest du Sicherheit oder zweifeln?", ["sicherheit", "zweifeln"]);
            },
        },
        enterMatrix: {
            crew: () => {
                player.isCrew = true;
                updateStory("Du bist jetzt Teil der Crew!");
                startMissions();
            },
            alleine: () => startMissions()
        },
        exitMatrix: {
            sicherheit: () => endGame("Du lebst ein ruhiges Leben in der Illusion."),
            zweifeln: () => endGame("Du beginnst zu zweifeln, aber die Wahrheit bleibt verborgen.")
        },
        mission: {
            agenten: () => processEncounter("agenten"),
            hacker: () => processEncounter("hacker"),
            sentinel: () => processEncounter("sentinel"),
            merowinger: () => processEncounter("merowinger"),
            keymaker: () => processEncounter("keymaker"),
            architekt: () => processEncounter("architect"),
            orakel: () => processEncounter("orakel")
        }
    };

    if (choices[gameState]?.[choice]) {
        choices[gameState][choice]();
        return;
    }

    const encounterResponses = {
        agentenEncounter: {
            kämpfen: () => {
                if (player.sentinelHacked && player.trustedHacker && player.keymakerTaken) {
                    updateStory("Dank deiner Verbündeten hast du die Agenten besiegt!");
                    endGame("Du hast die Agenten besiegt! Deine früheren Entscheidungen haben sich ausgezahlt.");
                } else {
                    endGame("Du hast gekämpft und verloren. Die Agenten waren zu stark.");
                }
            },
            fliehen: () => {
                player.trustedHacker = true;
                updateStory("Du bist entkommen!");
                startMissions();
            },
        },
        sentinelEncounter: {
            ablenken: () => endGame("Du hast den Sentinel abgelenkt und bist dabei gestorben."),
            hacken: () => {
                if (player.trustedHacker) {
                    updateStory("Mithilfe des abtrünnigen Hackers hast du den Sentinel gehackt – er unterstützt dich jetzt.");
                    startMissions();
                } else {
                    updateStory("Du bist entkommen, du benötigst Hilfe beim Hacken eines Sentinels.");
                    startMissions();
                }
            }
        },
        hackerEncounter: {
            vertrauen: () => {
                player.trustedHacker = true;
                updateStory("Der Hacker hilft dir mit wichtigen Informationen!");
                startMissions();
            },
            misstrauen: () => {
                updateStory("Du hast dem Hacker misstraut.");
                startMissions();
            },
        },
        merowingerEncounter: {
            annehmen: () => {
                player.merovingianMet = true;
                updateStory("Der Merowinger gibt dir wertvolle Hinweise.");
                startMissions();
            },
            ablehnen: () => {
                player.merovingianMet = true;
                updateStory("Der Merowinger verärgert dich.");
                startMissions();
            },
        },
        keymakerEncounter: {
            nehmen: () => {
                player.keymakerTaken = true;
                updateStory("Du hast einen wichtigen Schlüssel erhalten!");
                startMissions();
            },
            ablehnen: () => {
                updateStory("Du hast den Schlüssel nicht genommen.");
                startMissions();
            },
        },
        architectEncounter: {
            akzeptieren: () => {
                player.architectMet = true;
                updateStory("Du verstehst jetzt die Wahrheit hinter der Matrix.");
                startMissions();
            },
            ablehnen: () => {
                player.architectMet = true;
                updateStory("Du hast das Wissen abgelehnt.");
                startMissions();
            },
        },
        orakelEncounter: {
            zukunft: () => {
                player.oracleMet = true;
                updateStory("Das Orakel gibt dir eine Vision deiner Zukunft.");
                startMissions();
            },
            vergangenheit: () => endGame("Du bist in der Vergangenheit gefangen.")
        }
    };

    if (encounterResponses[gameState]?.[choice]) {
        encounterResponses[gameState][choice]();
    }
}

function startMissions() {
    nextState("mission", "Wähle eine Begegnung:", ["agenten", "hacker", "sentinel", "merowinger", "keymaker", "architekt", "orakel"]);
}

function processEncounter(type) {
    const encounters = {
        agenten: ["Agent Smith erscheint! Kämpfen oder fliehen?", ["kämpfen", "fliehen"]],
        sentinel: ["Ein Sentinel nähert sich! Ablenken oder hacken?", ["ablenken", "hacken"]],
        hacker: ["Ein Hacker bietet Hilfe an. Vertrauen oder misstrauen?", ["vertrauen", "misstrauen"]],
        merowinger: ["Der Merowinger bietet einen Handel an. Annehmen oder ablehnen?", ["annehmen", "ablehnen"]],
        keymaker: ["Der Schlüsselmacher bietet dir einen Schlüssel an. Nehmen oder ablehnen?", ["nehmen", "ablehnen"]],
        architect: ["Der Architekt fragt: Akzeptierst du sein Wissen?", ["akzeptieren", "ablehnen"]],
        orakel: ["Das Orakel fragt: Zukunft oder Vergangenheit?", ["zukunft", "vergangenheit"]]
    };

    if (encounters[type]) nextState(`${type}Encounter`, ...encounters[type]);
}

function endGame(message) {
    updateStory(message);
    nextState("end", "<Spiel beendet>", ["neustart"]);
}

function restartGame() {
    resetPlayer();
    gameState = "start";
    
    document.getElementById("story").innerHTML = "";
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("input-area").innerHTML = `
        <input type="text" id="input-field" placeholder="Dein Name">
        <button onclick="handleName()">Bestätigen</button>
    `;
    
    updateQuestion("Gib deinen Namen ein:");
}

resetPlayer();

