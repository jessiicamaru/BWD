'use client';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPaperPlane, faRobot } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useEffect, useRef, useState, useContext, memo } from 'react';
import { chatbotHandler } from './utils/ChatbotHandler';
import { ChatbotContext, actions } from '@/store/chatbotStore';
import Link from 'next/link';

function index() {
    const [openState, setOpenState] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAccessible, setIsAccessible] = useState(false);

    const [state, dispatch] = useContext(ChatbotContext);

    const chatbotButton = useRef(null);
    const closeButton = useRef(null);

    const chatBox = useRef(null);
    const inputRef = useRef(null);
    const sendButtonRef = useRef(null);

    const boxRef = useRef(null);

    useEffect(() => {
        chatbotButton.current &&
            chatbotButton.current.addEventListener('click', () => {
                setOpenState((prevOpenState) => !prevOpenState);
            });

        closeButton.current &&
            closeButton.current.addEventListener('click', () => {
                setOpenState(false);
            });
        chatBox.current &&
            chatBox.current.addEventListener('click', (e) => {
                e.stopPropagation();
            });

        sendButtonRef.current &&
            boxRef.current &&
            sendButtonRef.current.addEventListener('click', (e) => {
                if (inputRef.current.value.trim()) {
                    setLoading(true);
                    chatbotHandler({
                        question: inputRef.current.value.trim(),
                        dispatch,
                    });

                    inputRef.current.value = '';
                }
            });

        return () => {
            chatbotButton.current && chatbotButton.current.removeEventListener('click', () => {});
            closeButton.current && closeButton.current.removeEventListener('click', () => {});
            chatBox.current && chatBox.current.removeEventListener('click', () => {});
        };
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('userName'));

        if (user.id) {
            setIsAccessible(true);
        }
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [state.history]);

    return (
        <main className={styles.main} ref={chatbotButton}>
            <div className={styles.chatbotButton}>
                <FontAwesomeIcon icon={faRobot} className={styles.chatbotIcon} />
            </div>

            <div
                className={clsx(styles.chatBox, {
                    [styles.open]: openState,
                    [styles.close]: !openState,
                })}
                ref={chatBox}
            >
                <header>
                    <h2>Chatbot</h2>
                    <div className={styles.closeButton} ref={closeButton}>
                        <FontAwesomeIcon icon={faClose} className={styles.closeIcon} />
                    </div>
                </header>
                <div className={styles.container}>
                    <ul className={styles.box} ref={boxRef}>
                        <li className={styles.response}>
                            <div>
                                <div className={styles.chatbotAvatar}>
                                    <FontAwesomeIcon icon={faRobot} className={styles.chatbotIcon} />
                                </div>
                                <p className={styles.content}>Xin chào! Tôi có thể giúp gì cho bạn? 🚀</p>
                            </div>
                        </li>

                        {state.history &&
                            state.history.map((item) => {
                                return (
                                    <>
                                        <li className={styles.question} key={item.id + '1'}>
                                            <div>
                                                <p className={styles.content}>{item.question}</p>
                                            </div>
                                        </li>
                                        <li className={styles.response} key={item.id + '2'}>
                                            <div>
                                                <div className={styles.chatbotAvatar}>
                                                    <FontAwesomeIcon icon={faRobot} className={styles.chatbotIcon} />
                                                </div>

                                                <p className={styles.content} dangerouslySetInnerHTML={{ __html: item.response }}></p>
                                            </div>
                                        </li>
                                    </>
                                );
                            })}
                    </ul>

                    <div
                        className={clsx(styles.overlay, {
                            [styles.open]: loading,
                            [styles.close]: !loading,
                        })}
                    >
                        <p>Đợi một chút nhé...</p>
                    </div>

                    <div
                        className={clsx(styles.overlay, {
                            [styles.open]: !isAccessible,
                            [styles.close]: isAccessible,
                        })}
                    >
                        <button>
                            <Link href={'/login'}>Đăng nhập để sử dụng</Link>
                        </button>
                    </div>
                </div>

                <footer>
                    <textarea placeholder="Tôi có thể giúp gì cho bạn ?" spellcheck="false" ref={inputRef} />
                    <div className={styles.sendButton} ref={sendButtonRef}>
                        <FontAwesomeIcon icon={faPaperPlane} className={styles.sendIcon} />
                    </div>
                </footer>
            </div>
        </main>
    );
}

export default memo(index);
