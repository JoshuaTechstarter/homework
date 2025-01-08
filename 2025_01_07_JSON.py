import requests


def wetter_abfragen():
    city_name = input("Bitte geben Sie einen Ort ein: ")

    url = f"https://wttr.in/{city_name}?format=j1"
    response = requests.get(url)
    daten = response.json()

    temperatur = daten["current_condition"][0]["temp_C"]
    feels_like = daten["current_condition"][0]["FeelsLikeC"]
    area_name = daten["nearest_area"][0]["areaName"][0]["value"]

    print(f"\nWetterinformationen von der Wetterstation aus {area_name}:")
    print(f"Aktuelle Temperatur: {temperatur}°C")
    print(f"Gefühlte Temperatur: {feels_like}°C")
    print(f"")


wetter_abfragen()
