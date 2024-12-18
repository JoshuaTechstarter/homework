import datetime
import calendar


# 1. Aktuelles Datum und Uhrzeit ausgeben:
def aktuelles_datum_und_uhrzeit():
    jetzt = datetime.datetime.now()
    print(jetzt.strftime("Heute ist der %d.%m.%Y und es ist %H:%M:%S"))


aktuelles_datum_und_uhrzeit()


# 2. Differenz bis zum Jahresende berechnen:
def tage_bis_jahresende():
    heute = datetime.date.today()
    jahresende = datetime.date(2024, 12, 31)
    ergebnis = (jahresende - heute).days
    return print(f"{ergebnis} Tage bis das Jahr vorbei ist!")


tage_bis_jahresende()

# #3. Benutzerdefiniertes Datum:


def tage_bis_datum():
    dein_datum = input("Gib Datum: ")
    datum = datetime.datetime.strptime(dein_datum, "%d.%m.%Y")
    heute = datetime.datetime.today()
    ergebnis = abs(heute - datum).days
    return print(f"Es sind noch {ergebnis} Tage bis {dein_datum}")


tage_bis_datum()


# 4. Wochentag berechnen:


def wochentag_berechnen():
    wochentag = input("Bitte nenne ein Datum ")
    day = datetime.datetime.strptime(wochentag, "%d.%m.%Y").date()
    print(f"Der {wochentag} ist ein {calendar.day_name[day.weekday()]}")


wochentag_berechnen()


# 5. Zeitverschiebung berechnen:
# ○ Implementiere eine Funktion zeit_in_zukunft(), die eine Eingabe von
# Minuten, Stunden oder Tagen vom Benutzer entgegennimmt und das Datum
# und die Uhrzeit berechnet, die nach dieser Zeitspanne liegt.
# ○ Beispiel: Wenn der Benutzer 2 Stunden eingibt und die aktuelle Zeit 14:00
# ist, sollte das Programm 16:00 ausgeben.
def zeit_in_zukunft():
    delay = input("Wieviel Zeitverschiebung?")
    jandelay = datetime.datetime.strptime(delay, "%d.%m.%Y, %H,%M,%S")
    jetzt = datetime.datetime.now()

    return print(f"Die Zeitverschiebung beträgt: {jandelay + jetzt}")


zeit_in_zukunft()

# ?!?!?!
