import { Strategy } from "../strategy/BoxStrategy";

export interface BoxSetup {
  size: number,
  x: number,
  y: number,
  color: string,
  speed: number,
  strategy: Strategy
}

export default class Box {
  private size: number;
  public x: number;
  public y: number;
  private color: string;
  private speed: number;
  private strategy: Strategy

  constructor(setup: BoxSetup) {
    this.size = setup.size;
    this.x = setup.x;
    this.y = setup.y;
    this.color = setup.color;
    this.speed = setup.speed;
    this.strategy  = setup.strategy;
  }

  public info(){
    console.log('I am Box. Admire me, my color is ' + this.color + '!');
  }

  public update(){
    this.strategy.move(this)
  }
}