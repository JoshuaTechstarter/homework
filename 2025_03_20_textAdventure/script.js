let player = {
    name: "",
    pill: "",
    trustedHacker: false,
    merovingianMet: false,
    isCrew: false,
    keymakerTaken: false,
    architectMet: false,
    oracleMet: false,
    sentinelHacked: false,
};

// Spielstart
function startGame() {
    player.name = prompt("Wie ist dein Name?");
    alert(player.name + ", wach auf!");
    if (player.name === "Kevin") {
        alert("Hi " + player.name);
    }
    choosePill();
}

function choosePill() {
    let pill = prompt("Das ist deine letzte Chance.\n Danach gibt es kein Zurück mehr.\n Du musst dich entscheiden, nimmst du die rote oder die blaue Pille? (rot/blau)");
    if (pill === "rot") {
        player.pill = "rot";
        alert("Du nimmst die rote Pille – du bleibst im Wunderland und ich zeige dir, wie tief der Kaninchenbau wirklich ist.");
        enterMatrix();
    } else if (pill === "blau") {
        player.pill = "blau";
        alert("Du nimmst die blaue Pille – die Geschichte endet, du wachst in deinem Bett auf und glaubst, was immer du glauben willst.");
        exitMatrix();
    } else {
        alert("Ungültige Wahl. Bitte wähle 'rot' oder 'blau'.");
        choosePill();
    }
}

// Die Matrix betreten
function enterMatrix() {
    let choice = prompt("Möchtest du der Crew der Nebuchadnezzar beitreten oder alleine weitergehen? (crew/alleine)").toLowerCase();
    if (choice === "crew") {
        player.isCrew = true;
        alert("Du triffst auf Morpheus und Trinity. Sie nehmen dich in ihrer Crew auf und bereiten dich auf den Kampf vor.");
        mission();
    } else if (choice === "alleine") {
        player.isCrew = false;
        alert("Du gehst deinen eigenen Weg in der Matrix. Doch Vorsicht!");
        mission();
    } else {
        alert("Ungültige Wahl. Bitte wähle 'crew' oder 'alleine'.");
        enterMatrix();
    }
}

// In der Illusion bleiben
function exitMatrix() {
    let choice = prompt("Möchtest du ein Leben in scheinbarer Sicherheit führen oder an der Realität zweifeln? (sicherheit/zweifeln)").toLowerCase();
    if (choice === "sicherheit") {
        alert("Du akzeptierst dein Schicksal und lebst ein ruhiges Leben in der Illusion.");
    } else if (choice === "zweifeln") {
        alert("Du beginnst zu zweifeln - aber die Wahrheit bleibt dir für immer verborgen.");
    } else {
        alert("Ungültige Wahl, Bitte wähle 'sicherheit' oder 'zweifeln'.");
        exitMatrix();
    }
}

function mission() {
    let missionChoice = prompt("Deine Mission: Wähle eine Begegnung:\n" +
        "- Agenten\n- Hacker\n- Sentinel\n- Merowinger\n- Schlüsselmacher\n- Orakel\n- Architekt\n" +
        "(agenten/sentinel/hacker/orakel/merowinger/architekt/keymaker)").toLowerCase();

    if (missionChoice === "agenten") {
        agentEncounter();
    } else if (missionChoice === "sentinel") {
        sentinelEncounter();
    } else if (missionChoice === "architekt") {
        if (player.keymakerTaken) {
            architectEncounter();
        } else {
            alert("Dir fehlt der richtige Schlüssel, um den Architekten zu treffen.");
            mission();
        }
    } else if (missionChoice === "merowinger") {
        merovingianEncounter();
    } else if (missionChoice === "hacker") {
        hackerEncounter();
    } else if (missionChoice === "orakel") {
        if (player.merovingianMet) {
            oracleEncounter();
        } else {
            alert("Du kennst den Weg zum Orakel noch nicht.");
            mission();
        }
    } else if (missionChoice === "keymaker") {
        keymakerEncounter();
    } else {
        alert("Ungültige Wahl. Bitte versuche es erneut.");
        mission();
    }
}

// Bosskampf gegen Smith
function agentEncounter() {
    let decision = prompt("Agent Smith erscheint! Wählst du den Kampf oder die Flucht? (kämpfen/fliehen)");
    if (decision === "kämpfen") {
        if (player.isCrew && player.architectMet && player.oracleMet) {
            alert("Mithilfe von Morpheus, Trinity, dem Wissen des Orakels und des Architekten schaffst du es Agent Smith nach einem harten Kampf zu besiegen!");
            showWinScreen();
        } else {
            alert("Ohne Unterstützung hast du keine Chance gegen Agent Smith! Dein Geist bleibt für immer in der Matrix gefangen.");
        }
    } else if (decision === "fliehen") {
        alert("Du schaffst es gerade so, Agent Smith zu entkommen.");
        mission();
    } else {
        alert("Ungültige Wahl");
        agentEncounter();
    }
}

// Begegnung mit einem Sentinel
function sentinelEncounter() {
    let decision = prompt("Ein Sentinel nähert sich! Willst du den Roboter ablenken oder hacken? (ablenken/hacken)").toLowerCase();
    if (decision === "ablenken") {
        alert("Du hast den Sentinel erfolgreich abgelenkt.");
        mission();
    } else if (decision === "hacken") {
        if (player.trustedHacker) {
            alert("Mithilfe des abtrünnigen Hackers hast du hast den Sentinel erfolgreich gehackt und er unterstützt dich jetzt.");
            player.sentinelHacked = true;
        } else {
            alert("Du benötigst etwas Hilfe beim Hacken eines Sentinels.");
        }
        mission();
    } else {
        alert("Ungültige Wahl.");
        sentinelEncounter();
    }
}

// Begegnung mit einem Hacker
function hackerEncounter() {
    let decision = prompt("Ein abtrünniger Hacker bietet dir seine Dienste an. Willst du ihm vertrauen? (vertrauen/misstrauen)").toLowerCase();
    if (decision === "vertrauen") {
        alert("Du vertraust dem abtrünnigen Hacker und erhältst seine Unterstützung.");
        player.trustedHacker = true;
    } else if (decision === "misstrauen") {
        alert("Du misstraust dem Hacker und verlierst möglicherweise wichtige Informationen.");
    } else {
        alert("Ungültige Wahl.");
        hackerEncounter();
    }
    mission();
}

// Begegnung mit dem Merowinger
function merovingianEncounter() {
    let decision = prompt("Der Merowinger sagt: 'Alles hat seinen Preis. Nimmst du mein Angebot an?' (annehmen/ablehnen)").toLowerCase();
    if (decision === "annehmen") {
        alert("Du nimmst das Angebot des Merowingers an. Neue Möglichkeiten eröffnen sich dir.");
        player.merovingianMet = true;
    } else if (decision === "ablehnen") {
        alert("Du lehnst das Angebot ab.");
    } else {
        alert("Ungültige Wahl.");
        merovingianEncounter();
        return;
    }
    mission();
}

// Begegnung mit dem Architekten
function architectEncounter() {
    let decision = prompt("Der Architekt erklärt: 'Du bist Teil des großen Plans. Akzeptierst du mein Wissen?' (akzeptieren/ablehnen)").toLowerCase();
    if (decision === "akzeptieren") {
        alert("Du akzeptierst das Wissen des Architekten. Deine Realität erweitert sich.");
        player.architectMet = true;
    } else if (decision === "ablehnen") {
        alert("Du bewahrst deinen freien Willen, aber die Matrix bleibt rätselhaft.");
        player.architectMet = true;

    } else {
        alert("Ungültige Wahl.");
        architectEncounter();
        return;
    }
    mission();
}

// Begegnung mit dem Keymaker
function keymakerEncounter() {
    let decision = prompt("Der Schlüsselmacher bietet dir einen Schlüssel zu einer unbekannten Tür an. Nimmst du ihn an? (nehmen/ablehnen)").toLowerCase();
    if (decision === "nehmen") {
        alert("Du nimmst den Schlüssel an. Neue Möglichkeiten öffnen sich.");
        player.keymakerTaken = true;
    } else if (decision === "ablehnen") {
        alert("Du lehnst den Schlüssel ab.");
    } else {
        alert("Ungültige Wahl.");
        keymakerEncounter();
        return;
    }
    mission();
}

// Begegnung mit dem Orakel
function oracleEncounter() {
    let decision = prompt("Das Orakel fragt: 'Willst du die Zukunft oder deine Vergangenheit erfahren?' (zukunft/vergangenheit)").toLowerCase();
    if (decision === "zukunft") {
        alert("Das Orakel zeigt dir Visionen der Zukunft.");
        player.oracleMet = true;
    } else if (decision === "vergangenheit") {
        alert("Das Orakel enthüllt dir Geheimnisse deiner Vergangenheit.");
        player.oracleMet = true;
    } else {
        alert("Ungültige Wahl.");
        oracleEncounter();
        return;
    }
    mission();
}

// Spiel starten
startGame();