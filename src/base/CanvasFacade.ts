// facade

export default class Renderer {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
  
    public constructor() {
      
      this.canvas = document.createElement('canvas');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      document.body.appendChild(this.canvas);
      this.canvas.style.backgroundColor = 'gray';
      this.ctx = this.canvas.getContext('2d');

    }
  
    public draw(x: number, y: number, size: number, color: string) {
      this.ctx.save();
      console.log(color);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, size, size);
      this.ctx.restore();
    }
  
    public clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }