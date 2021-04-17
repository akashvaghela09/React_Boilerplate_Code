import React from 'react';
import styles from './Components.module.css'

const Task = ({data}) => {

    const { task, status} = data;
    return (
        <div className={styles.taskDiv}>
            <p className={styles.taskBlock}>{task}</p>
            <p className={styles.statusBlock}>{status}</p>
            {
                status ? <div className={styles.statusBlockGreen}>Completed</div>
                : <div className={styles.statusBlockRed}>Pending</div>
            }
        </div>
    )
}

export {Task}