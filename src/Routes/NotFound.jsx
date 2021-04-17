import React from 'react';
import { BiErrorAlt } from "react-icons/bi";
import styles from '../Components/Components.module.css'


const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <BiErrorAlt className={styles.error}/>
            <p className={styles.msg}>Page Not Found</p>
        </div>
    )
}

export default NotFound