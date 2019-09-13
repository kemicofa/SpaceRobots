import RobotService from "./services/robot.service";
import Map from "./models/map";

export default class SpaceRobots {

    private robotService: RobotService;
    constructor(
        width: number,
        height: number,
    ){
        const map = new Map(width, height);
        this.robotService = new RobotService(map);
    }

    public deploy(x: number, y: number){
        throw new Error("Not implemented");
    }
}