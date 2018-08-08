import React, { Fragment } from 'react';
import styles from './Tweet.css';
import Tweet from './Tweet';

const TweetWithMeta = ({ meta, ...props }) => {
    return (
        <Tweet {...props}>
            <Fragment>
                <div className={styles.image}>
                    <img src={meta.image_url} alt="Image accompanying tweet" />
                </div>
                <div className={styles.meta}>
                    <h3>{meta.title}</h3>
                    <div>{meta.description}</div>
                    <a>{meta.url}</a>
                </div>
            </Fragment>
        </Tweet>
    );
};

export default TweetWithMeta;
