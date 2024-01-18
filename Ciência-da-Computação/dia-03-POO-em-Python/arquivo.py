# Declarando a Classe Liquidificador


class Liquidificador:
    # Com o método __init__ inicializamos os atributos do objeto
    def __init__(self, cor, preco, potencia, tensao) -> None:
        self.cor = cor
        self.preco = preco
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_do_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade <= 0:
            raise ValueError(
                f"Velocidade deve estar entre 1 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_do_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    # Getter
    @property
    def cor(self):
        return self.__cor.upper()

    # Setter
    @cor.setter  # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor


liquidificador_vermelho = Liquidificador("vermelho", 300, 250, 220)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f"{self.nome} - tem {self.saldo_na_conta} reais em sua conta."


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
