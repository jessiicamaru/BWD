'use client';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect, useContext } from 'react';
import { RegisterContext, actions } from '@/store/registerStore';
import clsx from 'clsx';
import Link from 'next/link';

export default function Index() {
    const form = useRef(null);
    const submit = useRef(null);
    const [state, dispatch] = useContext(RegisterContext);

    const [serverData, setServerData] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const query = `query Users {
            users {
                id
                firstName
                lastName
                email
                password
            }
        }`;

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Aceept: 'application/json',
            },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            .then((data) => setServerData(data));
    }, []);

    useEffect(() => {
        console.log(serverData);
        submit.current &&
            serverData &&
            submit.current.addEventListener('click', () => {
                const user = serverData.data.users.find((user) => {
                    return user.email === email && user.password === password;
                });
                if (user) {
                    localStorage.setItem(
                        'userName',
                        JSON.stringify({
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            displayName: user.firstName + ' ' + user.lastName,
                            state: true,
                        })
                    );
                    location.href = '/';
                }
            });
    }, [serverData, email, password]);

    return (
        <>
            <div className={styles.backButton}>
                <FontAwesomeIcon icon={faHome} className={styles.backIcon} />
                <Link href={'/'}>Quay lại</Link>
            </div>
            <div className={styles.container} ref={form}>
                <div className={styles.leftSide}></div>
                <div className={styles.rightSide}>
                    <div className={styles.form1}>
                        <h1 className={styles.heading}>Đăng nhập</h1>
                        <div className={styles.line}>
                            <div className={clsx(styles.leftLine, styles.nestInput)} style={{ width: '100%' }}>
                                <span>Email</span>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        console.log(email);
                                        setEmail(e.target.value);
                                    }}
                                />
                                <span className={styles.message}></span>
                            </div>
                        </div>
                        <div className={styles.line} style={{ 'flex-wrap': 'wrap' }}>
                            <div className={clsx(styles.leftLine, styles.nestInput)} style={{ width: '100%' }}>
                                <span>Mật khẩu</span>
                                <input
                                    placeholder="Mật khẩu"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => {
                                        console.log(password);
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ width: '100%', padding: '0 10px' }}>
                            <button className={styles.submit} ref={submit}>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
