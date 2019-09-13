import RobotService from "./services/robot.service";
import Map from "./models/map";
import Utils from "./utils/index";

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
        this.robotService.add(x,y);
    }

    public applyActions(actions: string){
        Utils
            .SplitActions(actions)
            .forEach(this.robotService.applyAction);
    }

    public showState(){
        return this.robotService.data;
    }
}