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

# Exercise 8
