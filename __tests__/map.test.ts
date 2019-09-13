import SpaceRobots from "../src/index";

describe('Map', ()=>{
    it('should successfully create a map 5x5', ()=>{
        const spaceRobots = new SpaceRobots(5,5);
        const dimensions = spaceRobots.dimensions;
        expect(dimensions).toEqual([5,5]);
    })
});