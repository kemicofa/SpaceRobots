import Map from "../src/models/map";

describe('Map', ()=>{
    it('should successfully create a map 5x5', ()=>{
        const map = new Map(5,5);
        const dimensions = map.dimensions;
        expect(dimensions).toEqual([5,5]);
    })
});