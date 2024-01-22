# complexidade de algoritmos #

meu_array = [1, 2, 3, 4, 5]


def sum_arrays(array1, array2):
    result = []

    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result


print(sum_arrays(meu_array, meu_array))

# [2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 6, 7, 8, 9, 10]

# ---------------------------------------------------------------------------------------------------------------------------------------#

# algoritmo de busca binária


def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end:  # o início não pode ultrapassar o fim
        mid = start + end  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if target < numbers[mid]:  # elemento é menor? atualiza o índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")


# ---------------------------------------------------------------------------------------------------------------------------------------#


def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


n1, n2, n3 = calculations(3)
print(f"{n1}, {n2}, {n3}")
