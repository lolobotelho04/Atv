numeros = []
numero = float(input("Digite um número (digite 0 para encerrar): "))

while numero != 0:
    numeros.append(numero)
    numero = float(input("Digite um número (digite 0 para encerrar): "))

if len(numeros) > 0:
    maior = max(numeros)
    menor = min(numeros)
    print("Maior número:", maior)
    print("Menor número:", menor)
else:
    print("Nenhum número foi digitado.")