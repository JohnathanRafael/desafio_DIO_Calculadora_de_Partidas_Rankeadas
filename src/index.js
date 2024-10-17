// A aplicação não considera a entrada pelo usuário, para testar resultados basta alterar 
// os parâmetros na chamada da função calculateResultRanked(0,0) na linha 28

// Função para calcular a quantidade de vitórias
function calculateResultRanked(victory, loses){
    return victory - loses;
}

// Função para indicar em qual elo o jogador está
function verifyResult(amountVictory){
    if(amountVictory < 10){
        return "FERRO";
    } else if (amountVictory >= 11 && amountVictory <= 20){
        return "BRONZE";
    } else if (amountVictory >= 21 && amountVictory <= 50){
        return "PRATA";
    } else if (amountVictory >= 51 && amountVictory <= 80){
        return "OURO";
    } else if (amountVictory >= 81 && amountVictory <= 90){
        return "DIAMANTE";
    } else if (amountVictory >= 91 && amountVictory <= 100){
        return "LENDÁRIO";
    } else {
        return "IMORTAL";
    }
}

// função que 
function main(){
    // mudar os parâmetros aqui
    let amountWins = calculateResultRanked(0,5);
    let level = verifyResult(amountWins);
    console.log("O Herói tem saldo de " + amountWins + " vitórias e está no nível de " + level);
}

main();


