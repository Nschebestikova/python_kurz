# Procvicovani dictionary
students_results = {
  "Harry": 85,
  "Ron": 71,
  "Hermiona": 98,
  "Draco": 69
}

#tvorba prázdného dictionary
result_dictionary = {}

# jak zapsat opakováním výsledky
# nejprve si vytvoříme: result= "" - což se nám to proměnné udělá prázdné místo, zde se pak vypíšou výsledky/ poté - students_result[key] = result - pro vkládání výsledku, to si vyprintujeme
# a poté začneme tvořit cyklus, prtž to nechceme vypisovat ručně a tak si vložíme výsledky podle zhodnocení čísla
for key in students_results:
    score = students_results [key]
    if score > 90 and score < 100:
        result_dictionary[key] = "Excelentní"
    elif score >= 80 and score < 90:
        result_dictionary[key] = "Vynikající"
    elif score > 70 and score < 80:
        result_dictionary[key] = "Splněno"
    else: 
        result_dictionary[key] = "Nesplěno"


print(result_dictionary)



# Stupnice
# 91 až 100 = "Excelentní"
# 81 až 90 = "Vynikající"
# 71 až 80 = "Splněno"
# méně jak 71 = "Nesplněno"

