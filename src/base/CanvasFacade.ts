// Facade to simplify the usage of HTMLCanvasElement and CanvasRenderingContext2D
export default class CanvasFacade {
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
  
    // Draw rectangle at (x, y) with side length of (size) and color of (color)
    public draw(x: number, y: number, size: number, color: string) {
      this.ctx.save();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, size, size);
      this.ctx.restore();
    }
  
    // Clear the canvas
    public clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }