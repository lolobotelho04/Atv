idade = int(input("Digite a idade: "))

if idade < 16:
    print("Não está apta a votar.")
elif idade >= 16 and idade <= 17 or idade >= 70:
    print("Está apta a votar, mas não é obrigada.")
else:
    print("Está apta a votar e é obrigada.")