# Funkce s více parametry

def greet (name, location):  #definice porměnné
    print(f"Ahoj já jsem {name} a pocházím z města {location}")   #využití proměnné - definice

# positional arguments
greet ("David", "České budějovice")  #ARGUMENTY pro definované proměnné - tzv. klíčová slova

# keyword arguments
greet (name="Martina", location="Ostrava")

