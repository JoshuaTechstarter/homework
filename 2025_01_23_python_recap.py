# This file will be expanded with more exercises in the future

# Exercise 1
# Create a program that asks the user to enter their name and their age.
# Print out a message addressed to them that tells them the year that they will turn 100 years old.


currentYear = 2025
name = input("Please enter your name: ")
age = int(input("Please enter your age: "))
birthYear = currentYear - age
print(
    f"Hello {name}, your current age is {age} and you will turn 100 years old in the year {birthYear+100} "
)

# Add on to the previous program by asking the user for another number and printing out that many copies of the previous message.
# Print out that many copies of the previous message on separate lines.
number = int(input("How many copies? "))
output = f"Hello {name}, your current age is {age} and you will turn 100 years old in the year {birthYear+100} \n"
print(output * number)

# Exercise 2
# Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user.
# Extras:
# If the number is a multiple of 4, print out a different message.

user_num = int(input("Enter a number: "))


def oddoreven(number):
    if number % 2 == 0 and number % 4 != 0:
        print(f"The number {number} is even.")
    elif number % 2 == 0 and number % 4 == 0:
        print(f"The number {number} is even and is divisible by 4.")
    else:
        print(f"The number {number} is odd.")


oddoreven(user_num)

# Exercise 3
# Make a list and write a program that prints out all the elements of the list that are less than 5.

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = []
for num in a:
    if num < 5:
        b.append(num)
        print(b)


# Exercise 4
# Create a program that asks the user for a number and then prints out a list of all the divisors of that number.

uNum = int(input("Give me a number and I tell you the divisors: "))

range1 = range(1, uNum + 1)
divList = []

for number in range1:
    if uNum % number == 0:
        divList.append(number)

print(divList)

# #Exercise 5
# Take two lists and write a program that returns a list that contains only the elements that are common between the lists (without duplicates).

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
c = []

for number in a:
    if number in b:
        c.append(number)


# Exercise 6

# Exercise 7
# Write one line of Python that takes this list a and makes a new list that has only the even elements of this list in it.

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
b = [number for number in a if number % 2 == 0]

print(b)


# 30.01.2025
# Exercise 8


import random


while True:
    print("Lets play Rock-Paper-Scissors!")
    player_action = input("Choose: (Rock, Paper, Scissors): ")
    possible_actions = ["Rock", "Paper", "Scissors"]
    com_action = random.choice(possible_actions)
    print(f"\nYour choice: {player_action} VS COM choice {com_action}.\n")

    # untentschieden
    if player_action == com_action:
        print(f"Both players picked {player_action}. Its a draw!")

    elif (
        (player_action == "Rock" and com_action == "Scissors")
        or (player_action == "Paper" and com_action == "Rock")
        or (player_action == "Scissors" and com_action == "Rock")
    ):
        print("You win.. this time!")
    else:
        print("You lose!")

    play_again = input("New round?(Y/N): ")
    if play_again.lower() != "y":
        break
    else:
        print("Please try again!")
        continue


# Exercise 20
def find(ordered_list, element_to_find):
    for element in ordered_list:
        if element == element_to_find:
            return True
    return False


if __name__ == "__main__":
    l = [2, 4, 6, 8, 10]
    print(find(l, 5))  # prints False
    print(find(l, 10))  # prints True
    print(find(l, -1))  # prints False
    print(find(l, 2))  # prints True


# Exercise 11 - Is prime number?

num = int(input("Insert a number: "))
a = [x for x in range(2, num) if num % x == 0]


def is_prime(n):
    if num > 1:
        if len(a) == 0:
            print("prime")
        else:
            print("NOT prime")
    else:
        print("NOT prime")


is_prime(num)
