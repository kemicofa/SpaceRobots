import SpaceRobots from "../src/index";

describe('Space Robots', ()=>{

    let spaceRobots: SpaceRobots;
    let width: number;
    let height: number;
    beforeAll(()=>{
        width = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 100);
        spaceRobots = new SpaceRobots(width, height);
    });

    it('should run without any errors', ()=>{
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        spaceRobots.deploy(x, y);
    });

});