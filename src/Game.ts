// singletone

import Box from './base/Box'
import buildBlueBox from './boxes/BlueBox';
import buildRedBox from './boxes/RedBox';
import DrawEventManager from './events/DrawEventManager';
import UpdateEventManager from './events/UpdateEventManager';
import RendererFacade from './facade/RendererFacade'

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
    this.boxes.push(buildBlueBox(100, 200))
    this.boxes.push(buildRedBox(100, 500))
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