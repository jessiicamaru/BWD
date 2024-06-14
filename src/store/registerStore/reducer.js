import { constants } from '../registerStore';

let flag = false;
if (typeof window !== 'undefined') flag = true;
const initState = (flag && JSON.parse(localStorage.getItem('BWD_STATE'))) || {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    passwordInput: '',
    phoneNumberInput: '',
    formValid: false,
    verifyCode: '',
    success: false,
};

function reducer(state, action) {
    switch (action.type) {
        case constants.SET_DEFAULT_STATE:
            localStorage.setItem(
                'BWD_STATE',
                JSON.stringify({
                    firstNameInput: '',
                    lastNameInput: '',
                    emailInput: '',
                    passwordInput: '',
                    phoneNumberInput: '',
                    formValid: false,
                    verifyCode: '',
                    success: false,
                })
            );
            return {
                ...state,
                firstNameInput: '',
                lastNameInput: '',
                emailInput: '',
                passwordInput: '',
                phoneNumberInput: '',
                formValid: false,
                verifyCode: '',
                success: false,
            };
        case constants.SET_FIRST_NAME_INPUT:
            return {
                ...state,
                firstNameInput: action.payload,
            };
        case constants.SET_LAST_NAME_INPUT:
            return {
                ...state,
                lastNameInput: action.payload,
            };
        case constants.SET_EMAIL_INPUT:
            return {
                ...state,
                emailInput: action.payload,
            };
        case constants.SET_PHONE_NUMBER_INPUT:
            return {
                ...state,
                phoneNumberInput: action.payload,
            };
        case constants.SET_PASSWORD_INPUT:
            return {
                ...state,
                passwordInput: action.payload,
            };
        case constants.SET_FORM_VALID:
            return {
                ...state,
                formValid: action.payload,
            };
        case constants.SET_VERIFY_CODE:
            console.log(action.payload);
            return {
                ...state,
                verifyCode: action.payload({ firstName: state.firstNameInput, lastName: state.lastNameInput, email: state.emailInput }),
            };
        case constants.SET_SUCCESS:
            return {
                ...state,
                success: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
export { initState };
