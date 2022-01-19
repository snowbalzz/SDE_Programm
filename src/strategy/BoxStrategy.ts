import Box from "../base/Box";

  
export interface Strategy {
    move(box:Box) : void;
}

export class StayStrategy implements Strategy{
    public move(){
        console.log('I am standing still!');
    }
};

export class ChaoticStrategy implements Strategy{
    public move(box:Box){
        box.x += Math.random()*6-3
        box.y += Math.random()*6-3
    }
};

