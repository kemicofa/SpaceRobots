import Robot from "../models/robot";
import Map from "../models/map";
import { Action } from "../enums/action";

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

    applyAction(action: Action){
        const robot = this.currentRobot;
        if(!robot){
            throw new Error("No available robot");
        }
        switch(action){
            case Action.L: robot.rotateLeft(); break;
            case Action.R: robot.rotateRight(); break;
            case Action.M:
                const [x,y] = robot.previsionalPosition;
                if(this.hasRobotAt(x,y)){
                    throw new Error("Robot cannot advance, another robot is already there !")
                }
                robot.advance(); 
                break;
            default:
                throw new Error("Unexpected action")
        }
    }

    get data(): {x: number, y: number, label: string}[]
    {
        return this.robots.map(robot=>{
            const [x,y] = robot.position;
            const {label} = robot.direction;
            return {x,y,label}
        });
    }

    get currentRobot(): Robot 
    {
        return this.robots[this.robots.length-1];
    }
}