import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './MainSection.module.css'; 
const MainSection = () => {
    return ( 
        <div style={{height:'82.5vh'}}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.currentTab}>

            </div>
        </div>
     );
}
 
export default MainSection;