import RobotService from "../../src/services/robot.service";
import Map from "../../src/models/map";
import { Action } from "../../src/enums/action";

describe('Robot Service', ()=>{
    let robotService: RobotService;
    beforeAll(()=>{
        const map = new Map(5,5);
        robotService = new RobotService(map);
    });

    it('should be able to add a robot', ()=>{
        robotService.add(5,5);
        expect(robotService.hasRobotAt(5,5)).toBeTruthy();
    });

    it('should fail if robot deploed on robot', ()=>{
        try{
            robotService.add(5,5);
            expect(false).toBeTruthy();
        } catch(err){
            expect(err.message).toEqual("Cannot deploy robot")
        }
    });

    it('should be able to handle actions', ()=>{
        const actions = [Action.L, Action.L, Action.L];
        actions.forEach(action=>robotService.applyAction(action))
        const robot = robotService.currentRobot;
        expect(robot.direction.label).toEqual('E');
    });
});