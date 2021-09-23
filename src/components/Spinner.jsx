import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import styles from './spinner.module.css';

export default function spinner() {
    return (
        <div className={styles.spinner}>
           <FaSpinner className={styles.spinning} size={60} />
        </div>
    )
}
