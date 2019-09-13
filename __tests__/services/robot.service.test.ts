import RobotService from "../../src/services/robot.service";

describe('Robot Service', ()=>{
    let robotService: RobotService;
    beforeAll(()=>{
        robotService = new RobotService();
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
    })
});