'use client';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useRef, useContext, useEffect } from 'react';
import Link from 'next/link';

import { RegisterContext, actions } from '@/store/registerStore';

import { sendEmail } from '@/components/Register/RegisterHandler';
import { addUser } from './utils/userUtils';
import { v4 as uuidv4 } from 'uuid';

export default function Index() {
    const form = useRef(null);
    const verify = useRef(null);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [state, dispatch] = useContext(RegisterContext);

    const handleBack = () => {
        dispatch(actions.setFormValid(false));
        dispatch(actions.setSuccess(false));
        localStorage.setItem('BWD_STATE', JSON.stringify(state));
    };

    const limitDigit = (input) => {
        let inputValue = input.value;
        inputValue = inputValue.replace(/\D/g, '');

        if (inputValue.length > 1) {
            inputValue = inputValue.substring(0, 1);
        }

        input.value = inputValue;
    };

    const handleInputChange = (index, event) => {
        const { value } = event.target;
        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
        if (value.length > 1) {
            limitDigit(inputRefs[index].current);
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && !event.target.value) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleVerify = () => {
        let code = inputRefs.reduce((acc, ref, index) => {
            return (acc += ref.current.value);
        }, '');

        console.log(state.verifyCode);
        console.log(code);

        code === state.verifyCode && dispatch(actions.setSuccess(true));
        const id = uuidv4();
        const newUser = {
            userId: id,
            firstName: state.firstNameInput,
            lastName: state.lastNameInput,
            email: state.emailInput,
            phone: state.phoneNumberInput,
            password: state.passwordInput,
        };

        localStorage.setItem(
            'userName',
            JSON.stringify({
                id: id,
                firstName: state.firstNameInput,
                lastName: state.lastNameInput,
                displayName: `${state.firstNameInput} ${state.lastNameInput}`,
                state: true,
            })
        );

        addUser(newUser);
    };

    useEffect(() => {
        if (state.success === true) {
            localStorage.removeItem('BWD_STATE');
            location.href = '/';
        }
    }, [state.success]);

    return (
        <>
            <div className={styles.backButton} onClick={handleBack}>
                <FontAwesomeIcon icon={faHome} className={styles.backIcon} />
                <Link href="/register">Quay lại</Link>
            </div>
            <div className={styles.container} ref={form}>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}>
                    <div className={styles.form2}>
                        <h1 className={styles.heading}>Xác minh tài khoản của bạn</h1>
                        <p style={{ width: '100%', padding: '12px 12px 0' }}>
                            Kiểm tra email. Chúng tôi vừa gửi tới bạn một bức thư kèm với mã xác minh tài khoản của bạn. Nếu kiểm tra không thấy hãy
                            bấm vào{' '}
                            <span
                                onclick={() => {
                                    dispatch(actions.setVerifyCode(sendEmail));
                                }}
                            >
                                Gửi lại
                            </span>
                            .
                        </p>

                        <div className={styles.line} style={{ padding: '0 12px' }} id="code--input">
                            {inputRefs.map((ref, index) => {
                                return (
                                    <input
                                        key={index}
                                        className={styles.input}
                                        type="text"
                                        id={'input-' + (index + 1)}
                                        style={{ width: '20%' }}
                                        onChange={(e) => handleInputChange(index, e)}
                                        ref={ref}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                    />
                                );
                            })}
                        </div>

                        <div style={{ width: '100%', padding: '0 10px', position: 'absolute' }} ref={verify} onClick={handleVerify}>
                            <button className={styles.verify}>Xác minh</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
