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
        if(this.hasRobotAt(x,y) || !this.map.isInBoundary(x,y)){
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

    applyAction(action: string){
        const robot = this.currentRobot;
        if(!robot){
            throw new Error("No available robot");
        }
        switch(action){
            case 'L': robot.rotateLeft(); break;
            case 'R': robot.rotateRight(); break;
            case 'M': robot.advance(); break;
            default:
                throw new Error("Unexpected action")
        }
    }

    get currentRobot(): Robot 
    {
        return this.robots[this.robots.length-1];
    }
}