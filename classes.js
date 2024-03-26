let canvas = document.getElementById("canvas"); // Elemento canvas do html
let ctx = canvas.getContext("2d"); // Context do Canvas

class Pointer {
  #giro;
  /**
   * Define um novo objeto do tipo ponteiro.
   * @param {Number} length Comprimento do ponteiro.
   * @param {Number} div Número de divisões da circunferência.
   * @param {String} color Cor do ponteiro.
   * @param {Number} width Largura do ponteiro.
   */
  constructor(length, div, color, width) {
    this.width = width || 1;
    this.color = color || "red";
    this.div = div || 60;
    this.length = length || 100;
    this.origin = [250, 250];
    this.position = [0, this.length];
    this.angle = (2 * Math.PI) / this.div;
    this.#giro = [
      [Math.cos(this.angle), Math.sin(this.angle)],
      [-Math.sin(this.angle), Math.cos(this.angle)],
    ];
  }
  /**
   * Aplica a transformação ao vetor
   * @param {Array<Array<Number>>} transform Matriz de transformação.
   * @param {Array<Number>} vector Vetor que sofre a transformação.
   * @returns Vetor transformado.
   */
  #transformation(transform, vector) {
    return [
      transform[0][0] * vector[0] + transform[0][1] * vector[1],
      transform[1][0] * vector[0] + transform[1][1] * vector[1],
    ];
  }

  /**
   * Desenha o ponteiro.
   */
  draw() {
    ctx.lineWidth = this.width;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.origin[0], this.origin[1]);
    ctx.lineTo(
      this.origin[0] + this.position[0],
      this.origin[1] - this.position[1]
    );
    ctx.closePath();
    ctx.stroke();
    this.position = this.#transformation(this.#giro, this.position);
  }
}