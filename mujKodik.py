import math
import random

# PRO OPAKOVÁNÍ NĚJAKÉ ČINNOSTI JE NUTNÉ PAK PRACOVAT S CYKLEM

hodKostkou = str(input("Chcete si zahrát hru hod kostkou? Napište ano nebo ne\n")).lower()
if hodKostkou == "ano":
    print("Tak pojďme na to.")
    play = input("Jste ready? Napište ano nebo ne").lower()
    if play == "ano":
        print(math.ceil(random.random() * 6))
    else:
        print("Tak třeba příště.")
    play = input("Pokračujeme? Ještě to zkusíme? Napište ano nebo ne").lower()
    if play == "ano":
        print(math.ceil(random.random() * 6))
    else:
        print("Tak díky a ahoj")
else:
    print("Děkujeme přejeme krásný den, zahrajeme si příště.")

    Export ("mujKodik.py"),[]
    