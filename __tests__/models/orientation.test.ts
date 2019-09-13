import Orientation from "../../src/models/orientation";

describe('Orientation', ()=>{
    let orientation: Orientation;
    beforeAll(()=>{
        orientation = new Orientation();
    });

    it('Should be have N direciton on init',()=>{
        const {label} = orientation.direction;
        expect(label).toEqual('N');
    });

    it('Should have [1,0] default orienatation', ()=>{
        const {values} = orientation.direction;
        expect(values).toEqual([1,0]);
    })
})