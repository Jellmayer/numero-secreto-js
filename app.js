alert('Boas vindas ao Jogo do Número Secreto!');
let min = 2400;
let max = 2500;
let secretNumber = parseInt(Math.random() * (max - min) + min);
console.log(secretNumber);
let userAttempt;
let attempts = 0;

while(userAttempt != secretNumber){
    userAttempt = prompt(`Escolha um número entre ${min} e ${max}:`);
    attempts++;
    if(secretNumber == userAttempt)
        break;
    else {
        if(secretNumber > userAttempt)
            alert(`O número secreto é maior que ${userAttempt}.`);
        else
            alert(`O número secreto é menor que ${userAttempt}.`);
    }
}
// if ternário: variável = [condição] ? [valor da variável se condição verdadeira] : [valor da variável se condição falsa];
palavraTentativas = attempts > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou com ${attempts} ${palavraTentativas}, é o número ${secretNumber}! :D`);