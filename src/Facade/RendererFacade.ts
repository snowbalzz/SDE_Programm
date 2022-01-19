// facade

export default class Renderer {
    private ctx: CanvasRenderingContext2D;
  
    public constructor() {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      canvas.style.backgroundColor = 'white';
      this.ctx = canvas.getContext('2d');
    }
  
    public draw(x: number, y: number) {
      this.ctx.fillRect(x, y, 50, 50);
    }
  
    public clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }