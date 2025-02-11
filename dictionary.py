# Tvorba slovníku - dictionary a key-value

It_dictionary = {
    "String": "Text",
    "Integer": "Celé číslo",
    "Float": "Desetinné číslo",
    "Boolean": "Tru or false"
}

print(It_dictionary ["String"])
print(It_dictionary["Float"])


It_dictionary_2 = {
    0: "Text",
    1: "Celé číslo",
    2: "Desetinné číslo",
    3: "Tru or false"
}

#print(It_dictionary_2[0])
#print(It_dictionary_2[1])

# Přídání hodnot do dictionary
It_dictionary_2[4] = "Uložená další hodnota"
print(It_dictionary_2)