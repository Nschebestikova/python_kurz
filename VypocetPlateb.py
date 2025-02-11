#print("Vítejte v kalkulátoru na výpočet plateb")
#cost = int(input("Kolik máte celkem zaplatit?\n"))
#percentage = int(input("Kolik chcete dát spropitného (v %)"))
#people = float(input("Mezi kolik lidí se má částka rozdělit?"))

#onePayment = (cost + (cost * percentage / 100)) / people
#print(f"Máte zplatit {onePayment}Kč")


#postup pro zaokrouhlování desetinných čísel na dvě desetinná místa
print("Vítejte v kalkulátoru na výpočet plateb")
cost = int(input("Kolik máte celkem zaplatit? "))
percentage = int(input("Kolik chcete dát spropitného (v %). "))
people = int(input("Mezi kolik lidí se má rozdělit částka? "))


one_payment = (cost + (cost * percentage / 100)) / people
#final_payment = "{:+.2f}".format(one_payment)
final_payment = round(one_payment, 2)
#round, je zaokrouhlení na celé číslo
print(f"Každý člověk by měl zaplatit {final_payment} Kč")

# print("{:.2f}".format(3.1415926));
