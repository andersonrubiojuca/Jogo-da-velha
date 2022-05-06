let quadrado = document.querySelectorAll('.quadrado div');
let jogadorSelecionado = document.querySelector('#jogador-selecionado');
let vencedorSelecionado = document.querySelector('#vencedor-selecionado');
let button = document.querySelector('button');
let jogador = 'X';
let jogada = true;

jogadorSelecionado.innerHTML = jogador;

for (let index = 0; index < quadrado.length; index++) {
    quadrado[index].addEventListener('click', function(){
        if(quadrado[index].innerHTML !== 'x'){
            return;
        }

        // eq = este quadrado
        let eq = quadrado[index];
        let id = eq.id;

        eq.innerHTML = jogador;
        eq.style.color = '#000';

        if(jogada){
            jogador = 'O';
        } else {
            jogador = 'X'
        }

        mudarJogador(jogador);
        checaVencedor();
    });
}

button.addEventListener('click', function(){reiniciar()});

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
    jogada = !jogada;
}

function checaVencedor(){
    // horizontal
    if(checaSequencia(quadrado[1 -1], quadrado[2 -1], quadrado[3 -1])){
        mudaCorQuadrado(quadrado[1 -1], quadrado[2 -1], quadrado[3 -1]);
        mudarVencedor(quadrado[1 -1]);
        return;
    }
    if(checaSequencia(quadrado[4 -1], quadrado[5 -1], quadrado[6 -1])){
        mudaCorQuadrado(quadrado[4 -1], quadrado[5 -1], quadrado[6 -1]);
        mudarVencedor(quadrado[4 -1]);
        return;
    }
    if(checaSequencia(quadrado[7 -1], quadrado[8 -1], quadrado[9 -1])){
        mudaCorQuadrado(quadrado[7 -1], quadrado[8 -1], quadrado[9 -1]);
        mudarVencedor(quadrado[7 -1]);
        return;
    }
    // vertical
    if(checaSequencia(quadrado[1 -1], quadrado[4 -1], quadrado[7 -1])){
        mudaCorQuadrado(quadrado[1 -1], quadrado[4 -1], quadrado[7 -1]);
        mudarVencedor(quadrado[1 -1]);
        return;
    }
    if(checaSequencia(quadrado[2 -1], quadrado[5 -1], quadrado[8 -1])){
        mudaCorQuadrado(quadrado[2 -1], quadrado[5 -1], quadrado[8 -1]);
        mudarVencedor(quadrado[2 -1]);
        return;
    }
    if(checaSequencia(quadrado[3 -1], quadrado[6 -1], quadrado[9 -1])){
        mudaCorQuadrado(quadrado[3 -1], quadrado[6 -1], quadrado[9 -1]);
        mudarVencedor(quadrado[3 -1]);
        return;
    }
    //diagonal
    if(checaSequencia(quadrado[1 -1], quadrado[5 -1], quadrado[9 -1])){
        mudaCorQuadrado(quadrado[1 -1], quadrado[5 -1], quadrado[9 -1]);
        mudarVencedor(quadrado[1 -1]);
        return;
    }
    if(checaSequencia(quadrado[3 -1], quadrado[5 -1], quadrado[7 -1])){
        mudaCorQuadrado(quadrado[3 -1], quadrado[5 -1], quadrado[7 -1]);
        mudarVencedor(quadrado[3 -1]);
    }
}

function mudarVencedor(quadrado){
    vencedorSelecionado.innerHTML = quadrado.innerHTML
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    let eigual = false;

    if(quadrado1.innerHTML !== 'x'
     && quadrado1.innerHTML === quadrado2.innerHTML 
     && quadrado2.innerHTML === quadrado3.innerHTML)
        eigual = true;
    
    return eigual;
}

function reiniciar(){
    vencedorSelecionado.innerHTML = ''

    for (let index = 0; index < quadrado.length; index++){
        quadrado[index].style.background = '#eee';
        quadrado[index].style.color = '#eee';
        quadrado[index].innerHTML = 'x';
    }
}
