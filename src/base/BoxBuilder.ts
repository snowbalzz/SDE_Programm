import { StayStrategy, Strategy } from "../strategy/BoxStrategy";
import Box, { BoxSetup } from "./Box";

const defaultBoxSetup = () => ({
  size: 50,
  x: 0,
  y: 0,
  color: 'black',
  speed: 1,
  strategy: new StayStrategy()
});

export default class BoxBuilder {
  private setup: BoxSetup;

  public constructor() {
    this.reset();
  }

  private reset() {
    this.setup = defaultBoxSetup();
  }

  public setSize(size: number) {
    this.setup.size = size;
    return this;
  }

  public setColor(color: string) {
    this.setup.color = color;
    return this;
  }

  public setSpeed(speed: number) {
    this.setup.speed = speed;
    return this;
  }

  public setPosition(x: number, y: number) {
    this.setup.x = x;
    this.setup.y = y;
    return this;
  }

  public setStrategy(strategy: Strategy) {
    this.setup.strategy = strategy;
    return this;
  }

  public getResult() {
    const box = new Box(this.setup);
    this.reset();
    return box;
  }
}