import React, { Fragment } from 'react';
import styles from './Tweet.css';
import Tweet from './Tweet';

const TweetWithMeta = ({ meta, ...props }) => {
    return (
        <Tweet {...props}>
            <a href={`//${meta.url}`} target="_blank" rel="nofollow noopener">
                <div className={styles.image}>
                    <img src={meta.image_url} alt="Image accompanying tweet" />
                </div>
                <div className={styles.meta}>
                    <h3>{meta.title}</h3>
                    <div>{meta.description}</div>
                    <div className={styles.url}>{meta.url}</div>
                </div>
            </a>
        </Tweet>
    );
};

export default TweetWithMeta;
