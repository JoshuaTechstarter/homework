# Hausaufgabe vom  2024.12.17
import random


while True:

    print("Lass uns eine Runde Schere-Stein-Papier spielen!")
    player_action = input("Wähle: (Schere, Stein, Papier): ")
    possible_actions = ["Schere", "Stein", "Papier"]
    com_action = random.choice(possible_actions)
    print(f"\nDeine Wahl ist {player_action}, COM Wahl ist {com_action}.\n")

    if player_action == com_action:
        print(f"Beide Spieler haben {player_action} gewählt. Es ist unentschieden!")
    elif player_action == "Stein":
        if com_action == "Schere":
            print("Stein schlägt Schere! Du hast gewonnen!")
        else:
            print("Papier schlägt Stein! Du hast verloren.")
    elif player_action == "Papier":
        if com_action == "Stein":
            print("Papier schlägt Stein! Du hast gewonnen!")
        else:
            print("Schere schlägt Papier! Du hast verloren.")
    elif player_action == "Schere":
        if com_action == "Papier":
            print("Schere schlägt Papier! Du hast gewonnen!")
        else:
            print("Stein schlägt Schere! Du hast verloren.")

    play_again = input("Noch eine Runde?(Y/N): ")
    if play_again.lower() != "y":

        break
