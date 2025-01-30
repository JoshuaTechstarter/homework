def begruessung(name):  # () Klammern fehlen für das Argument
    print("Hallo, " + name)  # Einrückung, kleines n bei name


def addiere_zahlen(a, b):
    ergebnis = a + b
    return ergebnis  # typo bei ergebnis behoben


def subtrahiere_zahlen(a, b):
    return a - b  # variable c mit variable b ersetzt


def main():  # Doppelpunkt hat gefehlt
    zahl1 = float(input("Gib eine Zahl ein: "))  # mit strings kann man nicht rechnen
    zahl2 = float(
        input("Gib eine weitere Zahl ein: ")
    )  # deshalb in floats oder ints umwandeln

    summe = addiere_zahlen(zahl1, zahl2)
    print(f"Die Summe ist: {summe}")

    differenz = subtrahiere_zahlen(zahl1, zahl2)
    print(f"Die Differenz ist: {differenz}")

    begruessung("Max")


if __name__ == "__main__":  # == anstatt =
    main()
