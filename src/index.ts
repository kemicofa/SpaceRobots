import Map from "./models/map";

export default class SpaceRobots {

    private map: Map;
    constructor(
        width: number,
        height: number,
    ){
        this.map = new Map(width, height);
    }

    public deploy(x: number, y: number){
        throw new Error("Not implemented");
    }
}