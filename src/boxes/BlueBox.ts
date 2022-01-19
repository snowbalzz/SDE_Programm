import BoxBuilder from "../base/BoxBuilder";
import { ChaoticStrategy } from "../strategy/BoxStrategy";

export default function buildBlueBox(x: number, y: number) {
  const builder = new BoxBuilder();

  return builder
    .setSize(100)
    .setPosition(x, y)
    .setColor('blue')
    .setStrategy(new ChaoticStrategy())
    .getResult();
}