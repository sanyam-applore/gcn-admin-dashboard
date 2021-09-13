import React, {useState} from 'react';
import styles from './Header.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Redirect } from 'react-router-dom';

const Header = () => {
    const [redirect, setRedirect] = useState(false);
    const logout = ()=>{
        localStorage.removeItem('JWTTOKEN');
        localStorage.removeItem('user');
        sessionStorage.removeItem('JWTTOKEN');
        sessionStorage.removeItem('user');
        setRedirect(true);
    }
    if(redirect){
        return <Redirect to="/" />
    }
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.menu}><AiOutlineMenu style={{fontSize: '1.5em', transform:'translateY(3px)', cursor:'pointer'}}/></div>
                    <div className={styles.title}>Green Cloud Nine</div>
                    <div className={styles.subTitle}>Backend</div>
                </div>
                <div className={styles.right} onClick={()=>logout()}>
                    <FiLogOut style={{fontSize: '1.5em', transform:'translateY(5px)', cursor:'pointer'}}/>
                </div>
            </div>
        </div>
    );
}

export default Header;