
let numeroSecreto;
let tentativas;
let historico = [];
let pontos;
const maxTentativas = 5;


const campoResposta = document.getElementById('resposta');
const textoSecreto = document.getElementById('secreto');
const textoScore = document.getElementById('score');
const btnIniciar = document.getElementById('Iniciar');
const btnResponder = document.getElementById('conclusao');

function startGame() {
  
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    historico = [];
    pontos = 100;

   
    textoSecreto.innerText = "Jogo Iniciado! Tente um número de 1 a 100.";
    textoScore.innerText = tentativas;
    campoResposta.value = "";
    campoResposta.disabled = false;
    btnResponder.disabled = false;
    
    console.log("Número Secreto (para teste): " + numeroSecreto); 
}

function conclusao() {
    const chute = Number(campoResposta.value);

 
    if (isNaN(chute) || chute < 1 || chute > 100) {
        textoSecreto.innerText = "Por favor, digite um número entre 1 e 100.";
        return;
    }

    tentativas++;
    historico.push(chute);
    textoScore.innerText = tentativas;

    if (chute === numeroSecreto) {
        textoSecreto.innerText = `🎉 ACERTOU! O número era ${numeroSecreto}. Pontuação: ${pontos}`;
        finalizarJogo();
    } else {
        pontos -= 20; 
        
        if (tentativas >= maxTentativas) {
            textoSecreto.innerText = `❌ Game Over! O número era ${numeroSecreto}.`;
            finalizarJogo();
        } else {
          
            let dica = chute > numeroSecreto ? "Muito ALTO" : "Muito BAIXO";
            textoSecreto.innerText = `${dica}! Histórico: [${historico.join(", ")}]`;
        }
    }
    
    campoResposta.value = ""; 
    campoResposta.focus();
}

function finalizarJogo() {
    campoResposta.disabled = true;
    btnResponder.disabled = true;
    btnIniciar.innerText = "Jogar Novamente";
}