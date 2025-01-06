# # # Aufgabe 1:

word = input("Gib ein Wort ein: ").lower()
letter = input("Gib einen Buchstaben ein: ").lower()

counter = 0
# counter steht auf 0 und wird um 1 erhöht für
for each in word:
    if each == letter:
        counter += 1

print(f"Der Buchstabe {letter} kommt {counter} mal in {word} vor.")


# # Aufgabe 2: Summen und Durchschnitt berechnen (40 Punkte)

numbers = []

for _ in range(5):
    number = float(input("Gib eine Zahl ein: "))
    numbers.append(number)

summe = sum(numbers)
average = summe / 5
print(f"Die Summe aller Zahlen ist: {summe}")
print(f"Der Durchschnitt der Zahlen {numbers} ist {average} ")

# Erstelle ein Muster mit einer verschachtelten Schleife. Beispiel:


dot = int(input("Gib eine Zahl ein: "))


for i in range(1, dot + 1):
    print("*" * i)
