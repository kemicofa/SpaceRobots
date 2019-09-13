import Robot from "../../src/models/robot";

describe('Robot', ()=>{
    let robot: Robot;
    beforeAll(()=>{
        robot = new Robot(5,5);
    });

    it('Should be located at position (5,5)',()=>{
        const position = robot.position;
        expect(position).toEqual([5,5]);
    })
})