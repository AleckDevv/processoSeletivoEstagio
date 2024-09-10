/* 
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/


// Função para contar quantas vezes 'a' ou 'A' aparecem em uma string
const contadorA = (string) => {
   let contador = 0;

   // Percorre a string e conta as ocorrências de a ou A
   for (let i = 0; i < string.length; i++) {
      if (string[i] === 'a' || string[i] === 'A') {
         contador++;
      };
   };

   return `A letra 'a' aparece ${contador} vezes na string.`;
}


let minhaString = "Amazônia é a maior floresta tropical do mundo.";
console.log(contadorA(minhaString));  // String de teste
