idade1 = int(input("Digite a idade da primeira pessoa: "))
idade2 = int(input("Digite a idade da segunda pessoa: "))
idade3 = int(input("Digite a idade da terceira pessoa: "))

if idade1 >= 18 or idade2 >= 18 or idade3 >= 18:
    print("Pelo menos uma pessoa é maior de idade.")
    if idade1 >= 18 and idade2 >= 18 and idade3 >= 18:
        print("Todas as pessoas são maiores de idade.")
    elif idade1 < 18 and idade2 < 18 and idade3 < 18:
        print("Todas as pessoas são menores de idade.")
else:
    print("Todas as pessoas são menores de idade.")