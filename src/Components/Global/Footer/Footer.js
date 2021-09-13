import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.links}>
                <div>Terms Of Use</div>
                <div>Privacy Policy</div>
                <div>Impressum</div>
            </div>
        </div>
     );
}
 
export default Footer;