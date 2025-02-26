let numeroAtual = '';
let numeroAnterior = '';
let operacao = '';

function adicionaNumero(n) {
    numeroAtual += n;
    atualizaVisor();
}

function adicionaOperacao(op) {
    if(numeroAtual === '') return;
    if(numeroAnterior !== '') calcular();

    operacao = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
}

function calcular() {
    if(numeroAtual === '' || numeroAnterior === '') return;
    let resultado;
    const num1 = parseFloat(numeroAnterior);
    const num2 = parseFloat(numeroAtual);

    switch(operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            return;
    }
    numeroAtual = resultado.toString();
    numeroAnterior = '';
    operacao = '';
    atualizaVisor();
}

function limpaTela() {
    numeroAtual = '';
    numeroAnterior = '';
    operacao = '';
    atualizaVisor();
}

function atualizaVisor() {
    document.getElementById('display').value = numeroAtual;
}
