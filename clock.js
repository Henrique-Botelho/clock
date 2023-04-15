let canvas = document.getElementById('meuCanvas');
let ctx = canvas.getContext('2d');

let origin = [250, 250];
let giro = 2 * Math.PI / 60;
let velocidade = 1000;

let inicialSeg = [0, 230];
let inicialMin = [0, 200];
let inicialHora = [0, 150];

let matrizGiro = [
    [Math.cos(giro), Math.sin(giro)], 
    [-Math.sin(giro), Math.cos(giro)]
];

let ciclosSeg = 0;
let ciclosMin = 0;
let ciclosHora = 0;

function girar(vetor) {
    let novoX = (vetor[0] * matrizGiro[0][0]) + (vetor[1] * matrizGiro[0][1]);
    let novoY = (vetor[0] * matrizGiro[1][0]) + (vetor[1] * matrizGiro[1][1]);
    return [novoX, novoY];
}

setInterval(() => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,500,500);
    
    ctx.lineWidth = 3;

    // Ponteiro dos Segundos
    ctx.strokeStyle = 'red';
    ctx.moveTo(origin[0], origin[1]);
    ctx.lineTo(origin[0] + inicialSeg[0], origin[1] - inicialSeg[1]);
    ctx.stroke();
    ctx.beginPath();
    
    // Ponteiro dos Minutos
    ctx.strokeStyle = 'green';
    ctx.moveTo(origin[0], origin[1]);
    ctx.lineTo(origin[0] + inicialMin[0], origin[1] - inicialMin[1]);
    ctx.stroke();
    ctx.beginPath();
    
    // Ponteiro das Horas
    ctx.strokeStyle = 'blue';
    ctx.moveTo(origin[0], origin[1]);
    ctx.lineTo(origin[0] + inicialHora[0], origin[1] - inicialHora[1]);
    ctx.stroke();

    if (ciclosSeg !=0 && inicialSeg[0].toFixed(0) == 0 && inicialSeg[1].toFixed(0) == 230) {
        inicialMin = girar(inicialMin);
        ciclosMin += 1;
    }


    if (ciclosMin == 12) {
        inicialHora = girar(inicialHora);
        ciclosMin = 0;
        ciclosHora += 1;
    }

    if (ciclosHora == 5) {        
        ciclosHora = 0;
    }
    
    inicialSeg = girar(inicialSeg);
    ctx.beginPath();
    ciclosSeg += 1;
}, velocidade);