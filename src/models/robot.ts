import Orientation from "./orientation";

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

    get direction(): Orientation
    {
        return this.orientation;
    }
}