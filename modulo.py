# modulo je v řeči Pythonu dělení zbytkové, zbytek po dělení
#print(6 % 4) #2
#print(10 % 3) #1

cislo = int(input("Zadejte celé číslo\n"))
if cislo % 2 == 0:
    print("Sudé číslo")
else:
    print("Liché číslo")
  
# % tento znak neznamená v Pythonu klasické dělení ale dělení se zbytkem, tedy celočíselné dělení, klasické dělení se zapisuje znakem /
  