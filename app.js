let min = 1;    //Valor mínimo que o número secreto pode ter
let max = 100;  //Valor máximo que o número secreto pode ter
let numeroSecreto = gerarNumeroSecreto(min, max);

let input = document.querySelector('input')
input.min = min;
input.max = max;
let btnChutar = document.getElementById('chutar');
let btnReiniciar = document.getElementById('reiniciar');

let tentativas = 0;

exibirMensagemInicial();

//Função que obtém um elemento do HTML e altera o texto dele
function alterarTextoNaTag(text, tag){
    let element = document.querySelector(tag);
    element.innerHTML = text;
}

function gerarNumeroSecreto(min, max){
    let numero = parseInt(Math.random() * max) + min;
    console.log(numero);
    return numero;
}

function exibirMensagemInicial(){
    alterarTextoNaTag('Jogo do Número Secreto', 'h1');
    alterarTextoNaTag(`Descubra o número secreto entre ${min} e ${max}`, 'p');
}

function verificarChute(){
    let chute = parseInt(input.value);
    if(verificarLimite()){
        tentativas++;
        if(chute == numeroSecreto){
            alterarTextoNaTag('Parabéns!!!', 'h1');
            let mensagemTentativas = tentativas == 1 ? 'Você acertou na primeira tentativa!' : `Você acertou em ${tentativas} tentativas!`;
            alterarTextoNaTag(mensagemTentativas, 'p');
            btnChutar.disabled = true;
            btnReiniciar.disabled = false;
        } else {
            if(chute > numeroSecreto)
                alterarTextoNaTag(`O número secreto é menor que ${chute}`, 'p');
            else
                alterarTextoNaTag(`O número secreto é maior que ${chute}`, 'p');
            limparInput();
        }   
    } else {
        alterarTextoNaTag('O número digitado está fora do intervalo permitido', 'p');
        limparInput();
    }
}

//Verifica se o chute está dentro do intervalo permitido
function verificarLimite(){
    let chute = parseInt(input.value);
    return chute >= min && chute <= max;
}

//Reinicia o jogo
function novoJogo(){
    numeroSecreto = gerarNumeroSecreto(min, max);
    tentativas = 0;
    chute = '';
    btnChutar.disabled = false;
    btnReiniciar.disabled = true;
    limparInput();
    exibirMensagemInicial();
}

function limparInput(){
    input.value = '';
    input.focus();
}