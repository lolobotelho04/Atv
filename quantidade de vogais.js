frase = input("Digite uma frase: ").lower()

vogais = "aeiou"
contador = 0

for letra in frase:
    if letra in vogais:
        contador += 1

print("Quantidade de vogais na frase:", contador)