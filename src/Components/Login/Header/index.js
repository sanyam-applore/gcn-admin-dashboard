import React from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <span className={styles.title}>Green Cloud Nine</span>
                <span className={styles.subTitle}>Backend</span>
            </div>
        </div>
    );
}

export default Header;