// singletone

import Box from './base/Box'
import BoxBuilder from './base/BoxBuilder';
import DrawEventManager from './events/DrawEventManager';
import UpdateEventManager from './events/UpdateEventManager';
import RendererFacade from './facade/RendererFacade'
import { ChaoticStrategy, StayStrategy, StrafeStrategy } from './strategy/BoxStrategy';

export default class Game {
  private static instance: Game;
  private boxes: Box[];

  public eventManagers: {
    draw: DrawEventManager,
    update: UpdateEventManager
  }

  public renderer: RendererFacade

  private constructor() {
    this.renderer = new RendererFacade();
    this.boxes = [];
    this.eventManagers = {
      draw: new DrawEventManager,
      update: new UpdateEventManager,
    }
  }

  public start() {
    requestAnimationFrame(() => this.loop()); 

    const builder = new BoxBuilder();

    this.spawn(builder
      .setSize(20)
      .setPosition(100, 100)
      .setColor('red')
      .setStrategy(new StayStrategy())
      .getResult());

    this.spawn(builder
      .setSize(40)
      .setPosition(200, 200)
      .setColor('green')
      .setStrategy(new ChaoticStrategy())
      .getResult());

    this.spawn(builder
      .setSize(60)
      .setPosition(300, 300)
      .setColor('blue')
      .setStrategy(new StrafeStrategy(Math.PI / 4))
      .getResult());
  }

  public spawn(box: Box) {
    this.boxes.push(box);
  }

  public loop() {
    requestAnimationFrame(() => this.loop());
    this.eventManagers.update.notify();
    this.renderer.clear();
    this.eventManagers.draw.notify();
  }

  public static singleton(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}