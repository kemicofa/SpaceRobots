import Robot from "../../src/models/robot";

describe('Robot', ()=>{
    let robot: Robot;
    beforeAll(()=>{
        robot = new Robot(5,5);
    });

    it('Should be located at position (5,5)',()=>{
        const position = robot.position;
        expect(position).toEqual([5,5]);
    });

    it('should be able to advance', ()=>{
        robot.advance();
        const position = robot.position;
        expect(position).toEqual([6,5]);
    });

    it('should be able to rotate left and right', ()=>{
        robot.rotateLeft();
        expect(robot.direction.label).toEqual('W');
        robot.rotateRight();
        expect(robot.direction.label).toEqual('N');
    });
})