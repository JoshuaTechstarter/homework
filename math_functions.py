# Hausaufgabe vom  2024.12.17


# Additions-Funktion
def add(zahl1, zahl2):
    return zahl1 + zahl2


# Substraktions-Funktion
def subtract(zahl1, zahl2):
    return zahl1 - zahl2


# multiplikation-Funktion
def mult(zahl1, zahl2):
    return zahl1 * zahl2


# Division-Funktion
def div(zahl1, zahl2):
    return zahl1 / zahl2


# km to miles
def km_to_miles(km):
    zahl1 = float(km)
    return zahl1 * float(0.621371)


# miles to km
def miles_to_km(m):
    zahl1 = float(m)
    return zahl1 / float(0.621371)


# celsius to fahrenheit
def celsius_to_fahrenheit(c):
    zahl1 = float(c)
    return zahl1 * 1.8 + 32


# fahrenheit to celsius
def fahrenheit_to_celsius(f):
    zahl1 = float(f)
    return (zahl1 - 32) * (5 / 9)
