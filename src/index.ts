export default class SpaceRobots {

    constructor(
        private width: number,
        private height: number,
    ){}

    public deploy(x: number, y: number){
        throw new Error("Not implemented");
    }

    get dimensions(): number[] {
        return [this.width, this.height];
    }
}