const initState = {value: '默认值'};
export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'send_action':
            console.log("action", state, action)
            return Object.assign({}, state, action);
        default:
            return state;
    }
}