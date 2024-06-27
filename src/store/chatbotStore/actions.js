import { SET_CHAT_HISTORY, SET_RESPONSE, SET_QUESTION } from './constants';

export const setChatHistory = (payload) => ({
    type: SET_CHAT_HISTORY,
    payload,
});
