import moment from 'moment';
import React from 'react';
import styles from './Seller.module.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Seller = ({ props }) => {

    return (
        <>
            <div className={styles.seller} onClick={()=>window.open(`/seller/${props.id}`)}>
                <div className={styles.GI}><div className={styles.UID}>{props.id}</div></div>
                <div className={styles.GI} ><div className={styles.email}>{props.contactEmail || "N-A"}</div></div>
                <div className={styles.GI} ><div className={styles.createdAt}>{moment(props.createdAt).format('YYYY/MM/DD').split('/').reverse().join('/') || "N-A"}</div></div>
                <div className={styles.GI} >
                    <div className={styles.name}>{props.firstName} {props.lastName}</div>
                    <div><FaArrowAltCircleRight style={{fontSize: '24px'}}/></div>
                </div>
            </div>
            <hr className={styles.hr} />
        </>
    );
}

export default Seller;