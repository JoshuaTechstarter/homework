class Pet:
    def __init__(self, name, gender, species, age, favorite_food, energy_level):
        self.name = name
        self.gender = gender
        self.species = species
        self.age = age
        self.fav_food = favorite_food
        self.energy_level = energy_level

    def get_description(self):
        return f"Mein Haustier {self.name} ist ein(e){self.gender}{self.species} und ist {self.age} Jahre alt."

    def play(self, duration):
        energy_loss = duration * 5
        if self.energy_level < energy_loss:
            self.energy_level = 0
            print(f"{self.name} ist müde und braucht eine Pause!")

        else:
            self.energy_level = self.energy_level - energy_loss
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


my_first_cat = Pet("Lucy", "weiblich", "Katze", 2, "Schleckis", 100)
print(my_first_cat.get_description())
print(my_first_cat.play(20))
print(my_first_cat.feed("Schleckis"))
print(my_first_cat.sleep(2))

my_other_cat = Pet("Finn", "männlich", "Kater", 2, "Fisch", 100)
print(my_other_cat.get_description())
print(my_other_cat.feed("Trockenfutter"))
print(my_other_cat.play(10))
print(my_other_cat.sleep(4))
