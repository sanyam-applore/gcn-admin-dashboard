import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './MainSection.module.css';
import Sellers from '../../Views/Sellers/Sellers';

const MainSection = () => {
    const [view, setView] = useState(0);
    return (
        <div className={styles.container} style={{ height: '82.5vh' }}>
            <div className={styles.sidebar}>
                <Sidebar view={view} setView={setView} />
            </div>
            <div className={styles.currentTab}>
                {view===0?<Sellers />:null}
                {view===1?"Orders":null}
            </div>
        </div>
    );
}

export default MainSection;