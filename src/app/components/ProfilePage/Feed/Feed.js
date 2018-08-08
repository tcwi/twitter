import React from 'react';
import Tweet from './Tweet/Tweet';
import styles from './Feed.css';
import TweetWithImage from './Tweet/TweetWithImage';
import TweetWithMeta from './Tweet/TweetWithMeta';
import { image_url, meta } from '../../../mocks';

// in reality, would check for image url or meta data from response
// and render accordingly, but just injecting it in here for 2 tweets.
const Feed = ({ tweets }) => (
    <div className={styles.feed}>
        {tweets.map((props, i) => {
            if (i === 0) {
                return (
                    <TweetWithImage
                        {...props}
                        image_url={image_url}
                        key={props.id}
                    />
                );
            }

            if (i === 2) {
                return <TweetWithMeta {...props} meta={meta} key={props.id} />;
            }

            return <Tweet {...props} key={props.id} />;
        })}
    </div>
);

export default Feed;
