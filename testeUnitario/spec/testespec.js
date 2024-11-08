// teste

// it("Lista de Teste", function () {
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4);
// })

// describe("Teste de números", function(){
// it("Fizz Buzz", function() {
//     expect(jogo(1)).toBe(1);
//     expect(jogo(2)).toBe(2);
//     expect(jogo(3)).toBe("Fizz");
//     expect(jogo(4)).toBe(4);
//     expect(jogo(5)).toBe("Buzz");
//     expect(jogo(6)).toBe("Fizz");
//     expect(jogo(7)).toBe("7");
//     expect(jogo(8)).toBe("8");
//     expect(jogo(9)).toBe("Fizz");
//     expect(jogo(10)).toBe("Buzz");
// })
// })

// describe("Teste de média", function() {
//     it("Resultado",  function() {
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
// })

// describe("Pessoas", function() {
//     let nome = "Olivia";
//     let sobrenome = "Morais";
//     let idade = 17;

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//     it('Teste - Nome', function() {
//         expect("Olivia").toBe(pessoa.nome())
//     })
//     it('Teste - Nome e Sobrenome', function(){
//         expect("Olivia Morais").toBe(pessoa.nome_completo())
//     })
//     it('Teste - Nome, Sobrenome e Idade', function(){
//         expect("Olivia Morais tem idade de 17").toBe(pessoa.nome_tudo())
//     })
// })


//ex 1
describe("Multiplica", function() {
    it("Resultado", function(){
        let res = multiplicação();
        expect(res).toBe(6)
    })
})

//ex 2
describe("Divide", function(){ 
    it("divisao", function() {
            expect(divisao(10,2)).toBe(5);
})
})

//ex 3
describe ("Fahreinheit", function() {
    it ("Resultado", function() {
        let res = fahrenheit()
        expect(res).toBe(32)
    })
})
describe ("Celsius", function() {
    it ("Resultado", function() {
        let res = celsius()
        expect(res).toBe(25.6)
    })
})

//ex 4
describe ("Media", function() {
    it("Resultado", function(){
        let res = calcularMedia()
        expect(res).toBe(6)
    })
})

//ex 5
describe ("caracteres", function(){
    it("Contar caracteres", function() {
    expect(contaCaracter("hello")).toBe(5);
    expect(contaCaracter(12345)).toBe(5);
})
})

//6
describe ("calculos", function(){
    it("Calculadora", function() {
    expect(calculadora(4,2,"+")).toBe(6)
    expect(calculadora(4,2,"/")).toBe(2)
})
})
