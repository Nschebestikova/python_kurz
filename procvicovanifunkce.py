def prime_number_checker(number):
    result = "Je to prvočíslo"
    for one_number in range(2, number):
       if number % one_number == 0:
           result = "Není to prvočíslo"
    print(result)


n = int(input("Zadejte prosím číslo: "))
prime_number_checker(n)
