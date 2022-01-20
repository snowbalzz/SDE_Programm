import Box from "../base/Box";

export interface Strategy {
    move(box:Box) : void;
}

export class StayStrategy implements Strategy {
    public move() {
        
    }
};

export class ChaoticStrategy implements Strategy {
    public move(box: Box) {
        const direction = Math.random() * Math.PI * 2;
        box.x += box.speed * Math.cos(direction);
        box.y += box.speed * Math.sin(direction);
    }
};

export class StrafeStrategy implements Strategy {

    private counter: number;
    private baseDirection: number;

    constructor(baseDirection: number = 0) {
        this.counter = 0;
        this.baseDirection = baseDirection;
    }

    private addDirections(dir1, dir2): number {
        return (dir1 + dir2) % (Math.PI * 2);
    }

    public move(box: Box) {
        this.counter = (this.counter + 1) % 100; // [0, 99](100) = [0, 49](50) U [50, 99](50)

        const direction = this.counter < 50 ? 
            this.addDirections(0, this.baseDirection) : 
            this.addDirections(Math.PI, this.baseDirection);

        box.x += box.speed * Math.cos(direction);
        box.y += box.speed * Math.sin(direction);
    }
}

