import Map from "../../src/models/map";

describe('Map', ()=>{
    let map: Map;
    beforeAll(()=>{
        map = new Map(5,5);
    });

    it('should successfully create a map 5x5', ()=>{
        const dimensions = map.dimensions;
        expect(dimensions).toEqual([5,5]);
    })

    describe('Map#isInBoundary', ()=>{
        it('should be in boundary', ()=>{
            expect(map.isInBoundary(0,0)).toBeTruthy();
            expect(map.isInBoundary(5,5)).toBeTruthy();
        });
    
        it('should not be in bondary', ()=>{
            expect(map.isInBoundary(-1,-1)).toBeFalsy();
            expect(map.isInBoundary(6,6)).toBeFalsy();
        })
    })

});