import { Strategy } from "../strategy/BoxStrategy";
import Game from '../Game';

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
  public speed: number;
  private color: string;
  private strategy: Strategy
  private game: Game;

  constructor(setup: BoxSetup) {
    this.size = setup.size;
    this.x = setup.x;
    this.y = setup.y;
    this.color = setup.color;
    this.speed = setup.speed;
    this.strategy = setup.strategy;
    this.game = Game.singleton();
    this.game.eventManagers.update.attach(this);
    this.game.eventManagers.draw.attach(this);
  }

  public update(){
    this.strategy.move(this)
  }

  public draw() {
    this.game.renderer.draw(this.x, this.y, this.size, this.color);
  }
} 