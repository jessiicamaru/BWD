'use client';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

import useDebounce from './hooks/useDebounced';
import findContentAndLink from './utils/search';

import Link from 'next/link';
import Tippy from '@tippyjs/react';

function index() {
    const [rs, setRs] = useState([]);

    const [searchValue, setSearchValue] = useState('');
    const [visible, setVisible] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        const results = findContentAndLink(debounced.trim());

        if (results.length > 0) {
            setRs([...results]);
            setVisible(true);
        } else {
            setRs([]);
            setVisible(false);
        }
    }, [debounced]);

    return (
        <main className={styles.main}>
            <div className={styles.searchContainer}>
                <input
                    data-tippy-trigger="manual"
                    className={styles.searchInput}
                    type="text"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </div>
            <div className={styles.wrapper} tabindex="-1">
                <Wrapper results={rs} />
            </div>
        </main>
    );
}

export default index;
