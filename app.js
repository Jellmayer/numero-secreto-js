let min = 1;    //Valor mínimo que o número secreto pode ter
let max = 100;  //Valor máximo que o número secreto pode ter
let numeroSecreto = gerarNumeroSecreto(min, max);
let input = document.querySelector('input')
input.min = min;
input.max = max;

setTextOnTag('Jogo do Número Secreto', 'h1');
setTextOnTag(`Descubra o número secreto entre ${min} e ${max}`, 'p');

//Função que obtém um elemento do HTML e altera o texto dele
function setTextOnTag(text, tag){
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

function gerarNumeroSecreto(min, max){
    let numero = parseInt(Math.random() * max) + min;
    console.log(numero);
    return numero;
}

function verificarChute(){
    let chute = parseInt(input.value);
    console.log(chute == numeroSecreto);
}