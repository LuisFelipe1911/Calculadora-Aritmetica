// MIT License

// Copyright (c) 2024 LuisFelipe1911

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.




// Calculadora De Média Aritimetica


// variavel para armazenar a quantidade de numeros que o usuario irá digitar, por exemplo :
//      2,6,8,4
//      --------
//         4
//
//
let qtdNumeros = parseInt(prompt('Digite a quantidade de números para o cálculo da média:'));

// variavel para juntar o valor da variavel numero para essa variavel 
let soma = 0;

// variavel para controlar o loop
let contador = qtdNumeros;

// variavel que irá fazer a divisão para armazenar o resultado da media aritmética
let media = 0;

// loop, só para quando o contador for igual a 0
while(contador > 0){
    // Variavel para armazenar os valores dos numeros digitados
    let numero = parseFloat(prompt('Digite o numero:'));

    // Junta os valores da  Variavel "numero" para dentro do valor da variavel soma
    //    Exemplo:
    // ---- Loop 1 ------
    // numero = 1.1          --Junta o valor da variavel numero para dentro da variavel soma
    // soma = 1.1 
    // ------------------
    //
    // --- Loop 2 -------
    //  numero = 2.6        
    //  soma = 1.1           -- adiciona mais o 2.6 para a variavel soma, juntando o 1.1 com 2.6, virando 3.7
    //  
    //    soma = 3.7
    //
    // ------------------
    //
    soma += numero;


    // adicionando -1 a variavel contador, até chegar a 0 e parar o loop
    contador = contador - 1;


  




    
    
    
}
// Chaves indicando que o loop acabou


// Variavel para dividir o valor da soma por o valor da variavel  qtdNumeros
//   Exemplo:
//
//   3.7 / 2
//   
//
media = soma / qtdNumeros;

// exibe um alerta para o usuario informando o resultado da conta
alert("Resultado da conta: " + media);



