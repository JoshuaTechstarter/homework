class Pet:
    def __init__(self, name, gender, species, age, favorite_food, energy_level):
        self.name = name
        self.gender = gender
        self.species = species
        self.age = age
        self.fav_food = favorite_food
        self.energy_level = energy_level

    def get_description(self):
        return f"Mein(e) {self.species} {self.name} ist ein {self.gender} und ist {self.age} Jahre alt."

    def play(self, duration):
        energy_loss = duration * 5
        if self.energy_level < energy_loss:
            self.energy_level = 0
            print(f"{self.name} ist müde und braucht eine Pause!")

        else:
            self.energy_level = self.energy_level - energy_loss
        return (
            f"{self.name} hat gespielt und hat jetzt {self.energy_level} Energie übrig."
        )

    def feed(self, food):
        if food == self.fav_food:
            energy_gain = 30
            print(f"{self.name} liebt {self.fav_food}! Das macht richtig glücklich!")
        else:
            energy_gain = 10
        if self.energy_level + energy_gain > 100:
            self.energy_level = 100
        else:
            self.energy_level += energy_gain
        return f"{self.name} wurde gefüttert und hat jetzt {self.energy_level} Energie."

    def sleep(self, duration):
        energy_gain = duration * 10  # Energie wird pro Stunde um 10 Punkte geladen
        if self.energy_level + energy_gain > 100:
            self.energy_level = 100
            print(f"{self.name} hat genug geschlafen und ist jetzt voller Energie!")
        else:
            self.energy_level += energy_gain
            print(f"{self.name} hat geschlafen und fühlt sich erholt.")
        return f"{self.name} hat jetzt {self.energy_level} Energie."

    def cuddle(self):
        return f"{self.name} schnurrt zufrieden. Das Kuscheln hat der Katze gefallen!"


# Nach Abgabe bearbeitet
cats = [
    Pet("Lucy", "weiblich", "Katze", 2, "Schleckis", 100),
    Pet("Finn", "männlich", "Katze", 2, "Fisch", 100),
]

print("Wähle eine Katze aus:")
for i, cat in enumerate(cats, start=1):
    print(f"{i}: {cat.name} - {cat.get_description()}")

# Eingabe des Benutzers
while True:
    try:
        choice = int(input("Gib die Nummer der gewünschten Katze ein: "))
        if 1 <= choice <= len(cats):
            selected_cat = cats[choice - 1]
            print(f"Du hast {selected_cat.name} ausgewählt!")
            break
        else:
            print("Ungültige Nummer. Bitte wähle eine Nummer aus der Liste.")
    except ValueError:
        print("Bitte gib eine gültige Zahl ein.")

# Wiederholte Aktionen mit der Katze
while True:
    print("\nWas möchtest du tun?")
    print("1: Katze füttern")
    print("2: Mit der Katze spielen")
    print("3: Katze schlafen lassen")
    print("4: Katze beschreiben")
    print("5: Katze kuscheln")
    print("6: Programm beenden")

    try:
        action = int(input("Wähle eine Aktion (1-6): "))
        if action == 1:
            food = input("Was möchtest du der Katze zu essen geben? ")
            print(selected_cat.feed(food))
        elif action == 2:
            duration = int(input("Wie lange soll die Katze spielen (in Minuten)? "))
            print(selected_cat.play(duration))
        elif action == 3:
            duration = int(input("Wie lange soll die Katze schlafen (in Stunden)? "))
            print(selected_cat.sleep(duration))
        elif action == 4:
            print(selected_cat.get_description())
        elif action == 5:
            print(selected_cat.cuddle())
        elif action == 6:
            print("Tschüss! Bis zum nächsten Mal!")
            break
        else:
            print("Ungültige Eingabe. Bitte wähle eine Zahl zwischen 1 und 6.")
    except ValueError:
        print("Bitte gib eine gültige Zahl ein.")
