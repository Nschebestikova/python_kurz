# BMI
height = float(input("Vložte svou výšku v metrech: ")) 
weight = float(input("Vložte svou váhu v kg: "))

bmi = weight / (height * height) #závorky, aby se násobení provedlo jako první, závorky mají přednost + možnost napsat i takto: height**2

#print(round (bmi, 1))

if bmi < 18.5:
    print(f"Váš BMI má hodnotu {round(bmi, 1)}, máte podváhu")
elif bmi <24.9:
    print(f"Váš BMI má hodnotu {round (bmi, 1)} máte normální váhu")
elif bmi <29.9:
    print(f"Váš BMI má hodnotu {round (bmi, 1)} máte nadváhu")
elif bmi <34.9:
    print(f"Váš BMI má hodnotu {round (bmi, 1)} jste obézní")
else:
    print(f"Váš BMI má hodnotu {round (bmi, 1)} jste exterémně obézní")

    

    
    
    
