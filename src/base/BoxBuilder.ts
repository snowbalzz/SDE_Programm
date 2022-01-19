import { StayStrategy } from "../strategy/BoxStrategy";
import Box, { BoxSetup } from "./Box";

export default class BoxBuilder {
  private setup: BoxSetup;

  public constructor() {
    this.reset();
  }

  private reset() {
    this.setup = {
      size: 50,
      x: 0,
      y: 0,
      color: 'black',
      speed: 1,
      strategy: new StayStrategy()
    };
  }

  public setSize(size: number) {
    this.setup.size = size;
    return this;
  }

  public setColor(color: string) {
    this.setup.color = color;
    return this;
  }

  // .. more setters

  public getResult() {
    const box = new Box(this.setup);
    this.reset();
    return box;
  }
}