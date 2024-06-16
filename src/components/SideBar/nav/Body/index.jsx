import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.css';
import { blur, translate } from '../../anim';

export default function Body({ links, selectedLink, setSelectedLink }) {
    const setLocationBack = () => {
        if (location) {
            let url = location.href;

            url = url.slice(0, url.lastIndexOf('/'));
            location.href = url;
        }
    };

    const getChars = (word) => {
        let chars = [];
        word.split('').forEach((char, i) => {
            if (char === ' ') {
                chars.push(
                    <motion.span
                        custom={[i * 0.02, (word.length - i) * 0.01]}
                        variants={translate}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        key={char + i}
                    >
                        &nbsp;
                    </motion.span>
                );
            }

            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}
                >
                    {char}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <Link key={`l_${index}`} href={href === 'back' ? '' : href} onClick={href === 'back' && setLocationBack}>
                        <motion.p
                            onMouseOver={() => {
                                setSelectedLink({ isActive: true, index });
                            }}
                            onMouseLeave={() => {
                                setSelectedLink({ isActive: false, index });
                            }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index != index ? 'open' : 'closed'}
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                );
            })}
        </div>
    );
}
