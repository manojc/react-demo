export function buttonToggleReducer(state: boolean = true, action: { type: string, payload: any }): boolean {
    switch (action.type) {
        case "SHOW":
            return true;
        case "HIDE":
            return false;
        default:
            return true;
    }
}