import { SET_CHAT_HISTORY, SET_ALL_CHAT_HISTORY, DEFAULT } from './constants';

export const setChatHistory = (payload) => ({
    type: SET_CHAT_HISTORY,
    payload,
});

export const setAllChatHistory = (payload) => ({
    type: SET_ALL_CHAT_HISTORY,
    payload,
});

export const getDefault = () => ({
    type: DEFAULT,
});
