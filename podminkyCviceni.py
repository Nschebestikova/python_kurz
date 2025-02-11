# Podmínky - procvičování

#age = int(input("Zadejte svůj věk\n"))

#if  age >= 18:
    #print("Jste dospělý.")
#else:
    #print("Nejste dospělý.")
    
    
status = input("Cena lístku do kina stojí za dospělého 150 Kč. Pokud jsi studentem, pak máš nárok na slevu a lístek tě bude stát 120 Kč. Jsi studentem?\n")

if status == "ano":   #dvě rovná se je podmínka, že se to rovná, dává to hodnotu true
    print("Cena vašeho lístku je 120 Kč")
else:
    print("Cena vašeho lístku je 150Kč")
    