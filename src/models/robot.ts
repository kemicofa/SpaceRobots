import Orientation from "./orientation";
import { Direction } from "./directions";

export default class Robot {

    private orientation: Orientation;
    constructor(
        private x: number,
        private y: number
    ){
        this.orientation = new Orientation();
    }

    get position(): number[]
    {
        return [this.x, this.y];
    }

    get direction(): Direction
    {
        return this.orientation.direction;
    }

    rotateLeft(){
        this.orientation.rotateLeft();
    }

    rotateRight(){
        this.orientation.rotateRight();
    }

    advance(){
        const {direction:{values:[x,y]}} = this.orientation;
        this.x += x;
        this.y += y;
    }
}