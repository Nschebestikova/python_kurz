# range
#for one_number in range(1, 5):
#	    print(one_number)
	
# range s kroky
#for one_number in range(1, 11, 3):
	    #print(one_number)
	
	# suma čísel
	# 1 + 2 + 3 .... + 99 + 100
	# 100 + 99 + 98 .... 2 + 1
	# 100 * 101 / 2 = 5050
suma = 0
	
for one_number in range(1, 101):
	    # suma = suma + one_number
	    suma += one_number
	
print(suma)


#sečtení všech sudých čísel od jedné do stovky 

sum = 0


for one_number in range(1, 101):
    if one_number % 2 == 0:
        sum += one_number


print(sum)