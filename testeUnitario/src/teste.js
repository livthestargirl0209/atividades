//código fonte

// function inteiro(inteiro) {
//     return inteiro; // Essa é a solução 
// }

// fizz buzz

    // function jogo(numero){
    //     if (numero %3 == 0){
    //         return "Fizz"
    //     }

    //     if(numero %5 == 0){
    //         return "Buzz"
    //     }
    //     return numero;
    // }

    // const aluno = (nota, media) => {
    //     let resultado;
    //     let desempenho = 3;
    //     if (desempenho >= 7) {
    //         resultado = "Aprovado"
    //     } else {
    //         resultado = "Reprovado"
    //     }

    //     return resultado;
    // }

    // class Pessoa {
    //     constructor(_Nome, _SobreNome, _Idade){
    //         let nome = _Nome;
    //         let sobrenome = _SobreNome;
    //         let idade = _Idade;

    //         this.nome = () => {
    //             return nome
    //         }
    //         this.nome_completo = () => {
    //             return nome + ' ' + sobrenome
    //         }
    //         this.nome_tudo = () => {
    //             return nome + ' ' + sobrenome + ' tem idade de ' + idade
    //         }
    //     }
    // }


    // Ex 1:
    const multiplicação = (numero) => {
        let resultado;
        let num1 = 1
        let num2 = 2
        let num3 = 3

        if(num1 >= 0) {
            resultado = num1*num2*num3
        }
        return resultado
    }


    // Ex 2:
function divisao(num1, num2){
    let resultado;
    if (num2 != 0){
        resultado = num1/num2
    } else {
        resultado = "Não é possível dividir por 0"
    }
    return resultado
}


// Ex 3:

function fahrenheit(temperatura = 0){
    let resultado = temperatura * 1.8 + 32
    return resultado
}

function celsius(temperaturas = 32){
    let resultado = temperaturas * 1.8 - 32
    return resultado
}

//Ex 4:

function calcularMedia(num){
    let num1 = 4
    let num2 = 6
    let num3 = 8

    let resultado = (num1 + num2 + num3)/3


    return resultado
}

// Ex 5:

function contaCaracter(palavra){
    let resultado = palavra.lenght
    return resultado
}


//Ex 6:

function calculadora(num1, num2, operador){
    switch (operador){
        case "+":
        return num1 + num2

        case"-":
        return num1 - num2 

        case"*":
        return num1 * num2

        case"/":
        return num1 / num2

        default:
            return "operador inválido"
    }
}

