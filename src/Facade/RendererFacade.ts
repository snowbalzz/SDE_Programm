// facade

export default class Renderer {
    private ctx: CanvasRenderingContext2D;
  
    public constructor() {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      canvas.style.backgroundColor = 'gray';
      this.ctx = canvas.getContext('2d');
    }
  
    public draw(x: number, y: number, size: number, color: string) {
      this.ctx.save();
      console.log(color);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, size, size);
      this.ctx.restore();
    }
  
    public clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  }