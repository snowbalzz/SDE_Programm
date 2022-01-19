// singletone

export default class Game {
  private static instance: Game;
  
  private constructor() {

  }

  public start() {
    requestAnimationFrame(() => this.loop());
    console.log('Hello');
    console.clear();
    
  }

  public loop() {
    requestAnimationFrame(() => this.loop());

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