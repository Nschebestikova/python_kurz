import math

# Hondoty od uživatele - klíčová slova
wall_h = int(input("Zadejte výšku stěny v metrech: "))
wall_w = int(input("Zadejte šířku stěny v metrech: "))
coverage = 5

# Vytvoření funkce - kterou níže zavoláme a výpočet
def paint_calculator (width, height, cover):
    area = width * height
    number_can = math.ceil(area / 5)
    print (number_can)

paint_calculator (width=wall_h, height=wall_w, cover=coverage) #tímto zavoláme ty keywords výše, tedy ARGUMENTY










