// Adapter to canvas facade

import Box from "./Box";

// Adaptee - simplified canvas library to draw
import CanvasFacade from "./CanvasFacade";

// Renderer as how our boxes want to use it
export class Renderer {
  public draw(box: Box) {
    console.log(`Box draw: ${box.x} ${box.y}`);
  }

  public clear() {
    console.clear();
  }
}

// Adapter for our renderer to use CanvasFacade
export default class CanvasRendererAdapter extends Renderer {
  private adaptee: CanvasFacade;

  public constructor() {
    super();
    this.adaptee = new CanvasFacade();
  }

  public draw(box: Box) {
    this.adaptee.draw(box.x, box.y, box.size, box.color);
  }

  public clear() {
    this.adaptee.clear();
  }
}

