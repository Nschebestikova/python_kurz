print('''
_                                       _   _            
| |                                     | | | |          
| |__   __ _ _ __ _ __ _   _ _ __   ___ | |_| |_ ___ _ __
| '_ \ / _` | '__| '__| | | | '_ \ / _ \| __| __/ _ \ '__|
| | | | (_| | |  | |  | |_| | |_) | (_) | |_| ||  __/ |  
|_| |_|\__,_|_|  |_|   \__, | .__/ \___/ \__|\__\___|_|  
                        __/ | |                          
                       |___/|_|                          
''')
print("Vítejte v Bradavicích milí studenti")
print("Nyní se vypravíte do svých kolejí")


follow = input("Následovat spolužáky do své nebelvírské koleje? Napište ano nebo ne. ").lower()
if follow == "ano":
    stay = input("Jděte po samohýbajících se schodech společně s ostatními. Došli jste do nebelvírské společenské místnosti. Chcete zde zůstat nebo jít po schodech do své ložnice? Napište schody nebo ložnice. ").lower()
    if stay == "ložnice":
        print("Krásnou kouzelnou noc.")
    else:
        print("Zůstáváte a budete s ostatními ochutnávat kouzelné sladkosti.")
else:
    print("Odpojili jste se od svých spolužáků a stojíte sami na chodbě")
    left_or_right = input("Chcete se vydat doleva nebo doprava? Napište doleva nebo doprava. ").lower()
    if left_or_right == "doleva":
        print("Narazili jste na Filche a ten vás vezme do vaší koleje a pošle vás spát")
    else:
        door = input("Vidíte před sebou dveře na nádvoří. Chcete jít ven? Napište ven nebo zůstat").lower()
        if door == "ven":
            print("Venku je vám zima a raději se vrátíte na svou kolej.")
        else:
            print("Stojíš sám na chodbě a nudíš se. Raději se vrátíš do své koleje.")
