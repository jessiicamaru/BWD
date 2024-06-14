import {
    SET_FIRST_NAME_INPUT,
    SET_LAST_NAME_INPUT,
    SET_PHONE_NUMBER_INPUT,
    SET_EMAIL_INPUT,
    SET_PASSWORD_INPUT,
    SET_FORM_VALID,
    SET_VERIFY_CODE,
    SET_SUCCESS,
    SET_DEFAULT_STATE,
} from './constants';

export const setDefaultState = () => ({
    type: SET_DEFAULT_STATE,
});

export const setFirstNameInput = (payload) => ({
    type: SET_FIRST_NAME_INPUT,
    payload,
});

export const setLastNameInput = (payload) => ({
    type: SET_LAST_NAME_INPUT,
    payload,
});

export const setPhoneNumberInput = (payload) => ({
    type: SET_PHONE_NUMBER_INPUT,
    payload,
});

export const setEmailInput = (payload) => ({
    type: SET_EMAIL_INPUT,
    payload,
});

export const setPasswordInput = (payload) => ({
    type: SET_PASSWORD_INPUT,
    payload,
});

export const setFormValid = (payload) => ({
    type: SET_FORM_VALID,
    payload,
});

export const setVerifyCode = (payload) => ({
    type: SET_VERIFY_CODE,
    payload,
});

export const setSuccess = (payload) => ({
    type: SET_SUCCESS,
    payload,
});
