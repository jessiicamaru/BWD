import styles from '../styles.module.css';
import { actions } from '@/store/registerStore';
import sendEmail from './sendEmail';

export default function Validate({ options, context }) {
    const [state, dispatch] = context;

    let form = options.form;
    let selectorRules = {};
    let submitButton = options.submitInfo;

    let isFormValid = true;

    function validator(inputElement, rule) {
        let errorElement = parentElement(inputElement);

        let errorMessage;

        let rules = selectorRules[rule.selector];

        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) {
                break;
            }
        }

        if (errorMessage) {
            errorElement.classList.remove(styles.valid);
            errorElement.classList.add(styles.invalid);
            if (errorElement.querySelector(`.${styles.message}`)) {
                errorElement.querySelector(`.${styles.message}`).innerText = errorMessage;
            }
        } else {
            errorElement.classList.remove(styles.invalid);
            errorElement.classList.add(styles.valid);
            if (errorElement.querySelector(`.${styles.message}`)) {
                errorElement.querySelector(`.${styles.message}`).innerText = '';
            }
        }

        return !!errorMessage;
    }

    function parentElement(element) {
        while (element.parentElement) {
            if (element.parentElement.classList.contains(options.errorElement)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
        return null;
    }

    options.rules.forEach((rule, index) => {
        const inputElement = form.querySelector(rule.selector);

        if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test);
        } else {
            selectorRules[rule.selector] = [rule.test];
        }

        if (inputElement) {
            inputElement.onblur = () => {
                validator(inputElement, rule);
            };

            inputElement.oninput = () => {
                let errorElement = parentElement(inputElement);
                if (inputElement.id !== 'password') {
                    errorElement.classList.remove(styles.invalid);
                    errorElement.classList.add(styles.valid);
                    errorElement.querySelector(`.${styles.message}`).innerText = '';
                } else {
                    if (inputElement.value) {
                        if (inputElement.value.length >= 6) {
                            errorElement.querySelector('#condition--1').style.color = 'green';
                        } else {
                            errorElement.querySelector('#condition--1').style.color = 'red';
                        }

                        if (/\d/.test(inputElement.value)) {
                            errorElement.querySelector('#condition--2').style.color = 'green';
                        } else {
                            errorElement.querySelector('#condition--2').style.color = 'red';
                        }

                        if (/[A-Z]/.test(inputElement.value)) {
                            errorElement.querySelector('#condition--3').style.color = 'green';
                        } else {
                            errorElement.querySelector('#condition--3').style.color = 'red';
                        }
                    }
                }
            };
        }
    });

    submitButton.onclick = () => {
        options.rules.forEach((rule, index) => {
            const inputElement = form.querySelector(rule.selector);
            var isValid = validator(inputElement, rule);

            if (isValid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            dispatch(actions.setVerifyCode(sendEmail));
            dispatch(actions.setFormValid(true));
        }
    };
}

Validate.isRequired = function (selector) {
    return {
        selector,
        test(value) {
            return value.trim() !== '' ? undefined : 'Vui lòng nhập trường này';
        },
    };
};

Validate.isEmail = function (selector) {
    return {
        selector,
        test(value) {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            return regex.test(value) ? undefined : 'Vui lòng nhập email hợp lệ';
        },
    };
};

Validate.isPassword = function (selector) {
    return {
        selector,
        test(value) {
            if (value.length >= 6 && /\d/.test(value) && /[A-Z]/.test(value)) {
                return undefined;
            } else {
                return 'Error';
            }
        },
    };
};

Validate.isConfirmation = function (selector, password) {
    return {
        selector,
        test(value) {
            return value === password() ? undefined : 'Mật khẩu không khớp';
        },
    };
};

Validate.isPhoneNumber = function (selector) {
    return {
        selector,
        test(value) {
            if (/[A-Z]/.test(value) || /[a-z]/.test(value)) {
                return 'Nhập số điện thoại hợp lệ';
            } else {
                return undefined;
            }
        },
    };
};
