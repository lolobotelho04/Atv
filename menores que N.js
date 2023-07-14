def eh_primo(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

n = int(input("Digite um número: "))

print("Números primos menores que", n, ":")

for i in range(2, n):
    if eh_primo(i):
        print(i, end=" ")