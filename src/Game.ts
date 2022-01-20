// singletone

import Box from './base/Box'
import BoxBuilder from './base/BoxBuilder';
import DrawEventManager from './events/DrawEventManager';
import UpdateEventManager from './events/UpdateEventManager';
import { ChaoticStrategy, StayStrategy, StrafeStrategy } from './strategy/BoxStrategy';
import CanvasRendererAdapter, { Renderer } from './base/Renderer';

export default class Game {
  private static instance: Game;
  private boxes: Box[];
  public renderer: Renderer;
  public eventManagers: {
    draw: DrawEventManager,
    update: UpdateEventManager
  }

  private constructor() {
    this.renderer = new CanvasRendererAdapter();
    this.reset();
  }

  // Reset the game "scene"
  private reset() {
    this.boxes = [];
    this.eventManagers = {
      draw: new DrawEventManager,
      update: new UpdateEventManager,
    }
    this.populate();
  }

  // Begin the game
  public start() {
    requestAnimationFrame(() => this.loop()); 
  }

  // Spawn some boxes (used at game start)
  private populate() {
    const builder = new BoxBuilder();

    this.spawn(
      builder
      .setSize(20)
      .setPosition(100, 100)
      .setColor('red')
      .setStrategy(new StayStrategy())
      .getResult()
    );
    
    this.spawn(
      builder
      .setSize(40)
      .setPosition(200, 200)
      .setColor('green')
      .setStrategy(new ChaoticStrategy())
      .getResult()
    );

    this.spawn(
      builder
      .setSize(60)
      .setPosition(300, 300)
      .setColor('blue')
      .setStrategy(new StrafeStrategy(Math.PI / 4))
      .getResult()
    );
  }

  // Spawns a box
  private spawn(box: Box) {
    this.boxes.push(box);
  }

  // Game loop
  private loop() {
    requestAnimationFrame(() => this.loop());
    this.eventManagers.update.notify();
    this.renderer.clear();
    this.eventManagers.draw.notify();
  }

  // Get game instance (Game is singleton)
  public static singleton(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}