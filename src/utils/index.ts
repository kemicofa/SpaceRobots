import { Action } from "../enums/action";

export default class Utils {
    static SplitActions(actions: string): Action[]
    {
        return actions
            .toUpperCase()
            .split("")
            .map(action=>{
                switch(action){
                    case Action.L: return Action.L;
                    case Action.R: return Action.R;
                    case Action.M: return Action.M;
                    default:
                        throw new Error("Unexpected action")
                }
            });
    }
}