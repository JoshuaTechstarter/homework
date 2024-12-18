# Hausaufgabe vom  2024.12.17
import random


while True:
    print("Lass uns eine Runde Schere-Stein-Papier spielen!")
    player_action = input("Wähle: (Schere, Stein, Papier): ")
    possible_actions = ["Schere", "Stein", "Papier"]
    com_action = random.choice(possible_actions)
    print(f"\nDeine Wahl ist {player_action}, COM Wahl ist {com_action}.\n")

    # untentschieden
    if player_action == com_action:
        print(f"Beide Spieler haben {player_action} gewählt. Es ist unentschieden!")

    elif (
        (player_action == "Stein" and com_action == "Schere")
        or (player_action == "Papier" and com_action == "Stein")
        or (player_action == "Schere" and com_action == "Stein")
    ):
        print("Diese Runde geht an dich!")
    else:
        print("HHAHAHA LOSER")

    play_again = input("Noch eine Runde?(Y/N): ")
    if play_again.lower() != "y":
        break
    else:
        print("Bitte versuche es nochmal!")
        continue
