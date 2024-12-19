import datetime

# import calendar


# 1. Aktuelles Datum und Uhrzeit ausgeben:
def aktuelles_datum_und_uhrzeit():
    jetzt = datetime.datetime.now()
    print(jetzt.strftime("Datum: %d.%m.%Y Uhrzeit: %H:%M:%S\n"))


# aktuelles_datum_und_uhrzeit()


# 2. Differenz bis zum Jahresende berechnen:
def tage_bis_jahresende():
    heute = datetime.date.today()
    jahresende = datetime.date(2024, 12, 31)
    ergebnis = (jahresende - heute).days
    return print(f"{ergebnis} Tage bis das Jahr vorbei ist!\n")


# tage_bis_jahresende()

# #3. Benutzerdefiniertes Datum:


def tage_bis_datum():
    dein_datum = input("Gib Datum ein (DD.MM.YYY) ")
    datum = datetime.date.strptime(dein_datum, "%d.%m.%Y")
    heute = datetime.date.today()
    ergebnis = abs(heute - datum).days
    return print(f"Es sind noch {ergebnis} Tage bis {dein_datum}\n")


# tage_bis_datum()


# 4. Wochentag berechnen:


def wochentag_berechnen(user_date):
    return user_date.strftime("%A")


user_date_str = input("Enter a date (DD.MM.YYY)")

user_date = datetime.datetime.strptime(user_date_str, "%d.%m.%Y")


result_weekday = wochentag_berechnen(user_date)

print(f"The weekday of the input date is {result_weekday}")


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


# zeit_in_zukunft()

# ?!?!?!
