# Hangman
import random

# Uvítání a pravidla hry
print("Vítejte ve hře hádání postav z filmu Harry Potter. Vaším úkolem je...")


# Generování náhodného slova
words = ["harry", "ronald", "albus", "hermiona"]
random_word = words[random.randint(0, 3)]
print(random_word)

# Generování podtržítek
hidden_words = []
for one_letter in random_word:
    hidden_words.append("_")
    print(hidden_words)

guess = input("Zadejte hádané písmeno\n").lower()
for index in range(0, len(random_word)):
    if guess == random_word[index]:
        hidden_words[index] = guess

print(hidden_words)


# Vypsání slova s podtržítky v normální podobě
printedWord = ""
for one_letter in hidden_words:
    printedWord += one_letter

print(printedWord)

# Kontrola vítězství


