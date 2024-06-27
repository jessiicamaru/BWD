import { constants } from '../chatbotStore';

const initState = {
    response: '',
    question: '',
    history: [],
};

function reducer(state, action) {
    switch (action.type) {
        case constants.SET_CHAT_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };
        case constants.SET_RESPONSE:
            return state;
        case constants.SET_QUESTION:
            return state;
        default:
            return state;
    }
}

export default reducer;
export { initState };
