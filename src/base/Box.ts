export interface BoxSetup {
  size: number,
  x: number,
  y: number,
  color: string,
  speed: number,
}

export default class Box {
  private size: number;
  private x: number;
  private y: number;
  private color: string;
  private speed: number;

  constructor(setup: BoxSetup) {
    this.size = setup.size;
    this.x = setup.x;
    this.y = setup.y;
    this.color = setup.color;
    this.speed = setup.speed;
  }

  public info(){
    console.log('I am Box. Admire me, my color is ' + this.color + '!');
  }
}