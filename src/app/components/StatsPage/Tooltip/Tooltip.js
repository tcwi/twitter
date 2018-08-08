import React from 'react';
import styles from './Tooltip.css';

const Tooltip = ({ retweet_count, date, parentArea }) => {
    const formattedDate = new Date(date).toLocaleString('en-gb', {
        month: 'short',
        day: 'numeric'
    });

    // We don't want to show the tooltip if the area is being hovered on
    // rather than the line
    return !parentArea ? (
        <div className={styles.tooltip}>
            <div className={styles.date}>{formattedDate}</div>
            <div className={styles.count}>{`${retweet_count} retweets`}</div>
        </div>
    ) : null;
};

export default Tooltip;
