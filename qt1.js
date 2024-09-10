/* 
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma
dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem
que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando
se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    // Os dois primeiros números da sequência
    let a = 0;
    let b = 1;

    // Se o número for 0 ou 1, ele já pertence à sequência
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    // Calcula os números da sequência até que o número seja encontrado ou ultrapassado
    while (b < num) {
        let temp = b;
        b = a + b; // Próximo número da sequência
        a = temp;  // Atualiza o valor anterior
    }

    // Verifica se o número pertence à sequência
    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

console.log(isFibonacci(13));  // Número de teste
