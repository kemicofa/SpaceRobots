export default class Map {
    constructor(
        private width: number,
        private height: number
    ){}

    get dimensions(){
        return [this.width, this.height]
    }
}