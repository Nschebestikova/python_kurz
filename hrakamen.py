
import random
 
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''
 
paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''
 
scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
all_list = [rock, paper, scissors]


user_choose = int(input("Co si vyberete? Napište 0 pokud kámen, 1 pro papír a 2 pro nůžky\n"))
user_picture = all_list[user_choose]


computer_choose = random.randint(0, 2)
computer_picture = all_list[computer_choose]


print(f"Uživatel si vybral:\n {user_picture}")
print(f"Počítač si vybral:\n {computer_picture}")


if user_choose == computer_choose:
    print("Remíza")
elif user_choose == 0 and computer_choose == 1:
    print("Prohrál jsi, počítač vyhrává")
elif user_choose == 0 and computer_choose == 2:
    print("Vyhrál jsi, počítač prohrává")
elif user_choose == 1 and computer_choose == 0:
    print("Vyhrál jsi, počítač prohrává")
elif user_choose == 1 and computer_choose == 2:
    print("Prohrál jsi, počítač vyhrává")
elif user_choose == 2 and computer_choose == 0:
    print("Prohrál jsi, počítač vyhrává")
elif user_choose == 2 and computer_choose == 1:
    print("Vyhrál jsi, počítač prohrává")
    
    

    