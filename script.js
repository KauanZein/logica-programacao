// Logica de programação
//Problema: receber 3 notas de um aluno,
//calcular e apresentara média e o resultado
//se o aluno foi aprovado ou não.

console.log('Início do programa');

let nota1 = 8;
let nota2 = 5;
let nota3 = 5;

nota1 = parseInt(prompt());
nota2 = parseInt(prompt());
nota3 = parseInt(prompt());

console.log('A nota um é:', nota1);
console.log('A nota dois é:', nota2);
console.log('A nota três é:', nota3);

// cálculo da média
media = (nota1 + nota2 + nota3) / 3;

console.log('A média do aluno é:', media);

console.log('Fim do programa')



