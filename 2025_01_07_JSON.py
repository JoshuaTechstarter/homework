import requests


def wetter_abfragen():
    ort = input("Bitte geben Sie einen Ort ein: ")

    url = f"https://wttr.in/{ort}?format=j1"
    response = requests.get(url)
    daten = response.json()

    temperatur = daten["current_condition"][0]["temp_C"]
    gefuehlte_temperatur = daten["current_condition"][0]["FeelsLikeC"]
    area_name = daten["nearest_area"][0]["areaName"][0]["value"]

    print(f"\nWetterinformationen von der Wetterstation aus {area_name}:")
    print(f"Aktuelle Temperatur: {temperatur}°C")
    print(f"Gefühlte Temperatur: {gefuehlte_temperatur}°C")
    print(f"")


wetter_abfragen()
