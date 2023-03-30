// function cumprimentaCliente(cliente) {
//     return "Salve salve " + cliente;
// }

// console.log(cumprimentaCliente("David"));

// let saldo = 1000;

// function adicionaSaldo(valor) {
//     let soma = saldo + valor;
//     return "O saldo anterior era de " + saldo + "." + " O novo saldo agora é de: " + soma;
// }

// console.log(adicionaSaldo(500));

// let saldo = 1000;

// function subtraiValor(valor) {
//     let soma = saldo - valor;
//     return "O saldo anterior era de " + saldo + "." + " O novo saldo agora e de: " + soma;
// }

// console.log(subtraiValor(500));

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaClientes(nomeCliente) {
//     if (typeof nomeCliente === "string") {
//         clientesTrybeBank.push(nomeCliente)
//         return "Cliente adicionado com sucesso";
//     } else {
//         return "Erro";
//     }
// }

// console.log(adicionaClientes(true));
// console.log(adicionaClientes("David"));
// console.log(clientesTrybeBank);

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteEncontrado = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clienteEncontrado = true;
//         return 'Cliente excluída(o) com sucesso.';
//       }
//     }

//     if (clienteEncontrado === false) {
//       return 'Cliente não encontrado'
//     }
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   }
// };

function confereString(cliente) {
    if (typeof cliente === "string") {
        return true;
    } else {
        return "O parametro deve ser do tipo string";
    }
}

function clienteIndex(cliente) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            return index;
        }
    }
    return false;
}

function removeCliente(cliente) {
    let validacao = confereString(cliente);
    if(validacao !== true) {
        return validacao;
    }

    let index = clienteIndex(cliente);
    if(index === false) {
        return "Cliente nao encontrado";
    }
    
    clientesTrybeBank.splice(index, 1);
    return "Cliente excluido com sucesso";
}

console.log(removeCliente(false));
console.log(removeCliente("Alisson"));
console.log(removeCliente("John"));
console.log(clientesTrybeBank);