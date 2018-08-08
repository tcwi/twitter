import React from 'react';
import styles from './Statistic.css';

const Statistic = ({ title, value }) => (
    <div className={styles.statistic}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.value}>{value}</div>
    </div>
);

export default Statistic;
