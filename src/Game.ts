// singletone

import Box from './base/Box'
import buildBlueBox from './boxes/BlueBox';
import DrawEventManager from './events/DrawEventManager';
import UpdateEventManager from './events/UpdateEventManager';

export default class Game {
  private static instance: Game;
  private boxes: Box[];

  public eventManagers: {
    draw: DrawEventManager,
    update: UpdateEventManager
  }

  private constructor() {
    this.boxes = [];
    this.eventManagers = {
      draw: new DrawEventManager,
      update: new UpdateEventManager,
    }
  }

  public start() {
    requestAnimationFrame(() => this.loop()); 
    this.boxes.push(buildBlueBox())
  }

  public loop() {
    requestAnimationFrame(() => this.loop());
    this.eventManagers.update.notify();
    this.eventManagers.draw.notify();
  }

  public static singleton(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}