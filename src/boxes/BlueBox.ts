import BoxBuilder from "../base/BoxBuilder";

export default function buildBlueBox() {
  const builder = new BoxBuilder();

  return builder
    .setSize(100)
    .setColor('blue')
    .getResult();
}