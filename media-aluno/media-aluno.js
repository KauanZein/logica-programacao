function mediaAluno() {

    
    // Logica de programação
    //Problema: receber 3 notas de um aluno,
    //calcular e apresentara média e o resultado
    //se o aluno foi aprovado, reprovado ou ficou de exame.

    console.log('Início do programa');

    // declaração das "variáveis"
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);

    // cálculo da média
    const media = (nota1 + nota2 + nota3) / 3;

    document.getElementById('resultado').innerHTML = 'A média do aluno é: ' + media +'<br><br>';
    
    if (media >= 7) {
        document.getElementById('resultado').innerHTML += 'APROVADO';
    } else if (media >= 5) {
        document.getElementById('resultado').innerHTML += 'EXAME';
    } else {
        document.getElementById('resultado').innerHTML += 'REPROVADO';
    }


    // if (media >= 7) {
    //     console.log('APROVADO');
    // } else if (media >= 5) {
    //     console.log('EXAME');
    // } else {
    //     console.log('REPROVADO')
    // }


    console.log('Fim do programa')

}


