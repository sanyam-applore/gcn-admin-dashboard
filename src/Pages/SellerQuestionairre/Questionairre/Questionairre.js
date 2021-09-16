import React from 'react';
import styles from './Questionairre.module.css';
import BasicInformation from './Tabs/BasicInformation';
const Questionairre = (props) => {

    return (
        <div className={styles.questionairre}>
            {props.view === 1 ? <><BasicInformation /></> : null}
            {props.view === 2 ? <>Vision and Stategy</> : null}
            {props.view === 3 ? <>Governance and Management</> : null}
            {props.view === 4 ? <>Social Questions</> : null}
            {props.view === 5 ? <>Environmental Questions</> : null}
        </div>
    );
}

export default Questionairre;