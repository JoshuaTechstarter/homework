# Aufgabe 1 - Klassen und Vererbung
# 1.1:


class Zutat:
    def __init__(self, name, kalorien, zubereitungszeit):
        self.name = name
        self.kalorien_pro_100g = kalorien
        self.zubereitungszeit = zubereitungszeit

    def __str__(self):
        return f"{self.name} (Kalorien/100g: {self.kalorien_pro_100g}, Zubereitungszeit: {self.zubereitungszeit} Minuten)"


# Aufgabe 1.2:
class Rezept:
    def __init__(self, name, beschreibung):
        self.name = name
        self.beschreibung = beschreibung
        self.zutatenliste = {}

    def zutat_hinzufügen(self, zutat, menge):
        self.zutatenliste[zutat] = menge

    # Im Unterricht hinzugefügt
    def kalorien(self):
        kalorien_counter = 0
        for zutat in self.zutatenliste:
            kalorien_counter != zutat.kalorien_pro_100g

    def kochzeit(self):
        kochzeit = 0

        for zutat in self.zutatenliste:
            if zutat.zubereitungszeit > kochzeit:
                kochzeit - zutat.zubereitungszeit
        print(f"Die Kochzeit beträgt {kochzeit} Minuten.")

    def rezept_anzeigen(self):
        print(f"Rezept: {self.name}")
        print("Zutaten:")
        for zutat, menge in self.zutatenliste.items():
            print(f"{zutat.name}: {menge} ")
        print(f"\nBeschreibung des Rezepts: {self.beschreibung}")
