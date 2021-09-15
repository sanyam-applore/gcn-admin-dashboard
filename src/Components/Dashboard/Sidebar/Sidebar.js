import React from 'react';
import styles from './Sidebar.module.css';
const Sidebar = (props) => {
    return ( 
        <div className={styles.listContainer}>
            <div className={props.view===0 ? styles.activeList:styles.list} onClick={()=>props.setView(0)}>Sellers</div>
            <div className={props.view===1 ? styles.activeList:styles.list} onClick={()=>props.setView(1)}>Orders</div>
        </div>
     );
}
 
export default Sidebar;