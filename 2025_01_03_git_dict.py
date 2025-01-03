# Git command dictionary
git_commands = {
    "git init": "Erstellt ein neues Git-Repository im aktuellen Verzeichnis.",
    "git clone": "Klonen eines bestehenden Repositories aus einem Remote-Repository.",
    "git pull": "Holt die neuesten Änderungen vom Remote-Repository und integriert sie in das lokale Repository.",
    "git push": "Überträgt die lokalen Commits auf das Remote-Repository.",
    "git commit": "Speichert Änderungen in der lokalen Git-Datenbank.",
    "git status": "Zeigt den aktuellen Status der Arbeitskopie und des Staging-Bereichs an.",
    "git branch": "Zeigt die aktuellen Branches an oder erstellt einen neuen Branch.",
    "git merge": "Merge den angegebenen Branch in den aktuellen Branch.",
    "git log": "Zeigt die Commit-Historie des Repositories an.",
    "git diff": "Zeigt die Unterschiede zwischen den Dateien oder Commits an.",
    "git checkout": "Wechselt zu einem anderen Branch oder einer bestimmten Commit-Version.",
    "git reset": "Setzt den aktuellen Branch auf einen früheren Zustand zurück.",
    "git rm": "Entfernt eine Datei aus dem Git-Index und optional auch aus dem Arbeitsverzeichnis.",
}


def get_description(command):
    # Sucht nach dem Befehl im Wörterbuch und gibt die Beschreibung aus
    return git_commands.get(command, "Befehl nicht gefunden. Bitte Eingabe überprüfen.")


# Anzeige aller verfügbaren Git-Befehle einmal(!) zu Beginn
def display_commands():
    print("\nWähle einen Begriff:")
    for command in git_commands.keys():
        print(command)


display_commands()

# Loop für mehrere Abfragen
while True:
    command = (
        input("\nGib einen Git-Befehl ein (z.B. 'git pull') oder 'exit' zum Beenden: ")
        .strip()
        .lower()
    )
    # Beendet den Loop bei Eingabe 'exit'
    if command.lower() == "exit":
        print("Bis zum nächsten Mal.")
        break

    description = get_description(command)

    print(description)
