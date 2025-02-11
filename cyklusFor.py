#CYKLUS for


height = input("Vložte výšky lidí oddělené čárkou, to je mezerou\n" )
height_list = height.split(", ")
suma = 0
for one_height in height_list:
    suma = suma + int(one_height)
print(suma)
average = (int(suma / len(height_list)))
print (f"Průměrná výška je {average}")