import datetime


# 1. Aktuelles Datum und Uhrzeit ausgeben:
def aktuelles_datum_und_uhrzeit():
    date = datetime.datetime.now()
    print(date.strftime("Heute ist der %d.%m.%Y und es ist %H:%M:%S"))


aktuelles_datum_und_uhrzeit()


# 2. Differenz bis zum Jahresende berechnen:
# Schreibe eine Funktion tage_bis_jahresende(), die die Anzahl der Tage
# vom aktuellen Datum bis zum 31. Dezember des aktuellen Jahres berechnet.
# ○ Hinweis: Verwende datetime.date oder datetime.datetime zur
# Berechnung.
def tage_bis_jahresende():
    heute = datetime.date.today()
    jahresende = datetime.date(2024, 12, 31)
    distanz = (jahresende - heute).days
    print(f"Typ von Distanz {type(distanz)}")
    return print(f"{distanz} Tage bis das Jahr vorbei ist!")


tage_bis_jahresende()

# #3. Benutzerdefiniertes Datum:
# ○ Implementiere eine Funktion tage_bis_datum(), die ein vom Benutzer
# eingegebenes Datum im Format TT.MM.JJJJ einliest und die Anzahl der
# Tage vom aktuellen Datum bis zu diesem Datum berechnet.
# ○ Tipp: Verwende input() für die Benutzereingabe und prüfe, ob das
# eingegebene Datum gültig ist. Falls nicht, soll der Benutzer eine neue Eingabe
# machen.
# 4. Wochentag berechnen:
# ○ Erstelle eine Funktion wochentag_berechnen(), die den Wochentag für ein
# beliebiges eingegebenes Datum berechnet und ausgibt (z. B. Montag,
# Dienstag usw.).
# 5. Zeitverschiebung berechnen:
# ○ Implementiere eine Funktion zeit_in_zukunft(), die eine Eingabe von
# Minuten, Stunden oder Tagen vom Benutzer entgegennimmt und das Datum
# und die Uhrzeit berechnet, die nach dieser Zeitspanne liegt.
# ○ Beispiel: Wenn der Benutzer 2 Stunden eingibt und die aktuelle Zeit 14:00
# ist, sollte das Programm 16:00 ausgeben.
