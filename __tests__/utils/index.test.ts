import Utils from "../../src/utils/index";
import { Action } from "../../src/enums/action";

describe('Utils', ()=>{
    describe('Split Actions', ()=>{
        it('should split into correct actions', ()=>{
            const expected = [Action.L, Action.R, Action.M];
            const actionList = Utils.SplitActions('LRM');
            expect(actionList).toEqual(expected);
        })
    })
});