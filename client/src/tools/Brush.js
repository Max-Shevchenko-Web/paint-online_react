import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas, socket, id) {
    super(canvas, socket, id);
    this.listen()
}

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler(e) {
    this.mouseDown = false
  }

  mouseDownHandler(e) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
  }

  mouseMoveHandler(e) {
    // если кнопка нажата то будем рисовать
    if (this.mouseDown) {
      // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
      this.socket.send(JSON.stringify({
        method: 'draw',
        id: this.id,
        figure: {
            type: 'brush',
            x: e.pageX - e.target.offsetLeft,
            y: e.pageY - e.target.offsetTop
        }
      }))
    }
  }

  // рисуем линию
  // draw(x, y) {
  //   this.ctx.lineTo(x,y)
  //   this.ctx.stroke()
  // }

  //вариант с вебсокетами чтобы могли делать без создания экземпляра класса
  static draw(ctx, x, y) {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}
