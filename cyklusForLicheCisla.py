#sečtení všech lichých čísel od jedné do stovky 

sum = 0

for one_number in range(1, 101):
    if one_number % 3 == 0:
        sum += one_number


print(sum)


for one_number in range(1, 101):
    if one_number % 3 == 0:
        print("Fizz")
    elif one_number % 5 == 0:
        print("Buzz")
        
