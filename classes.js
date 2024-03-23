let canvas = document.getElementById("canvas"); // Elemento canvas do html
let ctx = canvas.getContext("2d"); // Context do Canvas

class Pointer {
  constructor(length, division, color, width) {
    this.lineWidth = width;
    this.color = color;
    this.division = division;
    this.vectorModule = length;
    this.origin = [250, 250];
    this.vector = [0, this.vectorModule];
    this.angle = (2 * Math.PI) / this.division;
    this.giro = [
      [Math.cos(this.angle), Math.sin(this.angle)],
      [-Math.sin(this.angle), Math.cos(this.angle)],
    ];
  }

  #transformation(transform, vector) {
    return [
      transform[0][0] * vector[0] + transform[0][1] * vector[1],
      transform[1][0] * vector[0] + transform[1][1] * vector[1],
    ];
  }

  draw() {
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.origin[0], this.origin[1]);
    ctx.lineTo(
      this.origin[0] + this.vector[0],
      this.origin[1] - this.vector[1]
    );
    ctx.closePath();
    ctx.stroke();
    this.vector = this.#transformation(this.giro, this.vector);
  }
}
