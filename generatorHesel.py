import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
special_char = ['%', '#', '$', '!', '&', '(', ')', '*', '+', '?']

print ("Tady je generator hesel")

num_letters = input("Kolik písmen chcete mít v hesle?\n")
num_number = input("Kolik čísel chcete mít v hesle?\n")
num_special_char = input("Kolik speciálních znaků chcete mít ve svém heslu?\n")

# Písmena, čísla a speciální znaky se kterými budeme pracovat
result = []

for index in range(0, num_letters):
    random_number = random.randint(0, len(letters)-1)
    result.append(letters[random_number])
