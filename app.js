let min = 1;    //Valor mínimo que o número secreto pode ter
let max = 100;  //Valor máximo que o número secreto pode ter
let numeroSecreto = gerarNumeroSecreto(min, max);

let input = document.querySelector('input')
input.min = min;
input.max = max;
let btnChutar = document.getElementById('chutar');
let btnReiniciar = document.getElementById('reiniciar');

let tentativas = 0;
let listaTentativas = [];
let totalJogos = 1;
let totalTentativas = 0;

exibirMensagemInicial();

//Função que obtém um elemento do HTML e altera o texto dele
function alterarTextoNaTag(texto, tag){
    let element = document.querySelector(tag);
    element.innerHTML = texto;
}

function gerarNumeroSecreto(min, max){
    let numero = parseInt(Math.random() * max) + min;
    console.log(numero);
    return numero;
}

function exibirMensagemInicial(){
    alterarTextoNaTag('Jogo do Número Secreto', 'h1');
    alterarTextoNaTag(`Descubra o número secreto entre ${min} e ${max}`, 'p');
    alterarTextoNaTag('', 'h4');
}

function verificarChute(){
    let chute = parseInt(input.value);
    if(verificarLimite()){
        tentativas++;
        totalTentativas++;
        if(chute == numeroSecreto){ //Usuário acertou o número secreto
            let mensagem = tentativas == 1 ? 'Você acertou na primeira tentativa!' : `Você acertou em ${tentativas} tentativas!`;        
            alterarTextoNaTag('Parabéns!!!', 'h1');
            alterarTextoNaTag(mensagem, 'p');
            listaTentativas.push(tentativas);
            mensagemSobreTentativas(tentativas);
            btnChutar.disabled = true;
            btnReiniciar.disabled = false;
        } else { //Usuário errou o número secreto
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

//Altera a mensagem sobre as tentativas
function mensagemSobreTentativas(tentativa){
    let mensagem = '';
    if(totalJogos == 1)
        mensagem = 'Esse foi seu primeiro jogo :)';
    else {
        if(tentativa == Math.min(...listaTentativas))
            mensagem = 'Você bateu seu recorde de tentativas! Esse foi seu melhor jogo XD';
        if(tentativa == Math.max(...listaTentativas))
            mensagem = 'Você demorou pra acertar hein! Esse foi seu pior jogo :(';
    }
    alterarTextoNaTag(mensagem, 'h4');
}

//Reinicia o jogo
function novoJogo(){
    totalJogos++;
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

//Exibe um relatório com as tentativas
function criarRelatório(){
    let relatorio = `Total de jogos: ${totalJogos}\n`;
    relatorio += `Total de tentativas: ${totalTentativas}\n`;
    relatorio += `Média de tentativas por jogo: ${totalTentativas / totalJogos}\n`;
    relatorio += `Maior número de tentativas em um jogo: ${Math.max(...listaTentativas)}\n`; //"..." chama-se Spread Operator, transforma cada
    relatorio += `Menor número de tentativas em um jogo: ${Math.min(...listaTentativas)}\n`; // índice em um parâmetro.
    alert(relatorio);
}