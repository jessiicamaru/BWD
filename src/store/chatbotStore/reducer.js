import { constants } from '../chatbotStore';

const initState = {
    response: '',
    question: '',
    history: [],
};

function reducer(state, action) {
    switch (action.type) {
        case constants.SET_CHAT_HISTORY:
            console.log('[state]', state);
            console.log('[state.history]', state.history);
            console.log('[action.payload]', action.payload);

            return {
                ...state,
                history: [...state.history, action.payload],
            };
        case constants.SET_ALL_CHAT_HISTORY:
            console.log('[state]', state);
            console.log('[state.history]', state.history);
            console.log('[action.payload]', action.payload);
            return {
                ...state,
                history: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
export { initState };
