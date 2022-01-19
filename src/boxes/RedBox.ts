import BoxBuilder from "../base/BoxBuilder";
import { ChaoticStrategy } from "../strategy/BoxStrategy";

export default function buildRedBox(x: number, y: number) {
  const builder = new BoxBuilder();

  return builder
    .setSize(30)
    .setPosition(x, y)
    .setColor('red')
    .setSpeed(3)
    .setStrategy(new ChaoticStrategy())
    .getResult();
}