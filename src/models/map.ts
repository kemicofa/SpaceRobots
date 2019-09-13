export default class Map {
    constructor(
        private width: number,
        private height: number
    ){}

    get dimensions(){
        return [this.width, this.height]
    }

    isInBoundary(x: number, y: number): boolean
    {
        return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
    }
}