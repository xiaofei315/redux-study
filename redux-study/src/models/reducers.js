const initState = {
    count: 0
}
export const reducers = (state = initState, action) => {
    switch (action.type) {
        case "add_action":
            return {count: state.count + 1};
        default:
            return state;
    }
}