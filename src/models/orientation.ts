import Directions, {Direction} from "./directions";
 
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
}