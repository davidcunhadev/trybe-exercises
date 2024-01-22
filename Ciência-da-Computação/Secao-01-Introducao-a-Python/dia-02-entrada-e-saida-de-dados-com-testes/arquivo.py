# Entrada de Dados através do INPUT #

user_input = input("Digite uma mensagem: ")

# Saída de Dados através do PRINT #
print(user_input)

print("Os resultados são", 6, 23, 42, sep=" - ")

# Saída de Dados com f-string #
nome = "Alice"
idade = 25
mensagem = f"Olá, meu nome é {nome} e eu tenho {idade} anos."
print(mensagem)

# Entrada e Saída da Dados #
nome = input("Digite seu nome: ")

for letter in nome:
    print(letter)

# Desempacotamento de Valores #
a, b = "cd"
print(a)
print(b)

head, *tail = (1, 2, 3)  # O * desempacota os valores em formato de lista
print(head)
print(tail)

# Tratamento de Excessão de Erro
while True:
    try:
        x = int(input("Por favor digite um número inteiro: "))
        print(x)
        break
    except ValueError:
        # 'ValueError' é a exceção que ocorre quando a função int() recebe um
        # valor que não pode ser traduzido para número inteiro
        print("Oops! Esse não era um número inteiro. Tente novamente...")
