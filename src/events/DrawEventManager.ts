import Box from "../base/Box";

export default class DrawEventManager {
  private listeners: Box[];

  constructor() {
    this.listeners = [];
  }

  public attach(listener: Box): void {
    this.listeners.push(listener);
  }

  public notify(): void {
    this.listeners.forEach(listener => {
      listener.draw();
    })
  }
}