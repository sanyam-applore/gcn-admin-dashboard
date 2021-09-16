import React from 'react';
import styles from './Sidebar.module.css';
import {Button} from '@material-ui/core'
const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.listContainer}>
                <div className={props.view === 1 ? styles.activeList : styles.list} onClick={() => props.setView(1)}>Basic Information</div>
                <div className={props.view === 2 ? styles.activeList : styles.list} onClick={() => props.setView(2)}>Vision and Stategy</div>
                <div className={props.view === 3 ? styles.activeList : styles.list} onClick={() => props.setView(3)}>Governance and Management</div>
                <div className={props.view === 4 ? styles.activeList : styles.list} onClick={() => props.setView(4)}>Social Questions</div>
                <div className={props.view === 5 ? styles.activeList : styles.list} onClick={() => props.setView(5)}>Environmental Questions</div>
            </div>
            <div className={styles.approveButton}>
                <Button variant="contained"  style={{textAlign:'center', width:'100%', backgroundColor: '#f50057', marginBottom: '1em'}}>REJECT</Button>
                <Button variant="contained" color="primary" style={{textAlign:'center', width:'100%'}}>APPROVE</Button>
            </div>
        </div>
    );
}

export default Sidebar;