import Robot from "../models/robot";
import Map from "../models/map";

export default class RobotService {
    private robots: Robot[];
    constructor(
        private map: Map
    ){
        this.robots = [];
    }

    add(x: number, y: number){
        if(this.hasRobotAt(x,y)){
            throw new Error("Cannot deploy robot");
        }
        this.robots.push(new Robot(x,y));
    }

    hasRobotAt(x: number, y: number): boolean
    {
        return this
            .robots
            .findIndex(robot=>{
                const [xr, yr] = robot.position;
                return xr === x && yr === y;
            }) > -1;
    }
}