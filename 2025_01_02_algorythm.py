def berechne_ungerade_summen():
    zahl1 = int(input("Gib die erste Zahl ein: "))
    zahl2 = int(input("Gib die zweite Zahl ein: "))

    start = min(zahl1, zahl2)
    ende = max(zahl1, zahl2)

    ungerade_zahlen = [zahl for zahl in range(start, ende + 1) if zahl % 2 != 0]
    summe = sum(ungerade_zahlen)
    anzahl = len(ungerade_zahlen)

    print(f"Summe der ungeraden Zahlen: {summe}")
    print(f"Anzahl der ungeraden Zahlen: {anzahl}")


berechne_ungerade_summen()
