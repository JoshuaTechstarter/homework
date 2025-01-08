class Pet:
    def __init__(self, name, species, age, favorite_food, energy_level):
        self.name = name
        self.species = species
        self.age = age
        self.fav_food = favorite_food
        self.energy_level = energy_level

    def get_description(self):
        return f"My pet {self.name} is a {self.species} and is currently {self.age} years old."

    def play(self, duration):
        energy_loss = duration * 5
        if self.energy_level - energy_loss >= 0:
            self.energy_level -= energy_loss
        else:
            self.energy_level = 0
            print(f"{self.name} ist müde und braucht eine Pause!")
        return f"{self.name} hat gespielt und hat jetzt {self.energy_level} Energie."

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


my_female_cat = Pet("Lucy", "cat", 2, "Schleckis", 100)
my_male_cat = Pet("Finn", "cat", 2, "fish", 100)

# Beschreibung ausgeben
print(my_female_cat.get_description())
# Haustier spielen lassen
print(my_male_cat.play(10))
print(my_female_cat.play(20))

# Haustier füttern
print(my_male_cat.feed("Trockenfutter"))
print(my_female_cat.feed("Schleckis"))
# Energie nach dem Spielen
print(my_male_cat.play(10))

# Schlafen, um Energie aufzuladen
print(my_male_cat.sleep(4))

# Schlafen, bis die Energie voll ist
print(my_female_cat.sleep(2))
