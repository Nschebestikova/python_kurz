# Procvicování cyklus For

score = input("Zadejte skóre jednotlivých studentů oddělené čárkou a mezerou\n")
score_list = score.split(", ")
score_list_number = []
maximum = 0


for index in range(0, len(score_list)):
   score_list_number.append(int(score_list[index]))


for one_number in score_list_number:
    if one_number > maximum:
        maximum = one_number


print(f"Maximum je {maximum}")



