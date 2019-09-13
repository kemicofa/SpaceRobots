import Directions, {Direction} from "./directions";
 const LEN = Directions.length;

export default class Orientation {
    private _direction: Direction; 
    private sentinel: number;
    constructor(){
        this._direction = Directions[0];
        this.sentinel = 0;
    }

    get direction(): Direction
    {
        return this._direction;
    }

    rotateLeft(){
        this.rotate(-1);
    }

    rotateRight(){
        this.rotate(1);
    }

    private rotate(value: number){
        this.sentinel = (value + LEN + this.sentinel) % LEN;
        this._direction = Directions[this.sentinel];
    }

}