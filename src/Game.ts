// singletone

import Box from './base/Box'
import buildBlueBox from './boxes/BlueBox';

export default class Game {
  private static instance: Game;
  private boxes: Box[];

  private constructor() {
    this.boxes = [];
  }

  public start() {
    requestAnimationFrame(() => this.loop()); 
    this.boxes.push(buildBlueBox())
  }

  public loop() {
    requestAnimationFrame(() => this.loop());
    this.boxes.forEach((box)=>{
      box.info();
    });
  }

  public static singleton(): Game {
    console.log('sing')
    if (!Game.instance) {
      console.log('tone')

      Game.instance = new Game();
    }
  
    return Game.instance;
  }
}