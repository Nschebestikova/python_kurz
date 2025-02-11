print("Vitejte v aplikaci na objednání pizzy")
size = str(input("Jakou chcete velikost pizzy? S, M nebo L?" ))
chilli_peppers = str(input("Chcete feferonky navíc? ano nebo ne" ))
extra_cheese = str(input("Chcete extra sýry? ano nebo ne" ))

bill = 0

if size == "S":
    bill+= 100
elif size == "M":
    bill += 150
elif size == "L":
    bill += 200 
    
if chilli_peppers == "ano":
    if size != "S":
        bill+= 30
    else:
        bill += 20
if extra_cheese == "ano":
    bill += 15
    
print(f"Vaše částka je {bill} Kč")
     



