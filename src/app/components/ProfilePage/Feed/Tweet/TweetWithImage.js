import React from 'react';
import styles from './Tweet.css';
import Tweet from './Tweet';

const TweetWithImage = ({ image_url, ...props }) => {
    return (
        <Tweet {...props}>
            <div className={styles.image}>
                <img src={image_url} alt="Image accompanying tweet" />
            </div>
        </Tweet>
    );
};

export default TweetWithImage;
