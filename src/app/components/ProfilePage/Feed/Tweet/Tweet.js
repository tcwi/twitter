import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tweet.css';
import enlargeImage from '../../../../utils/enlargeImage';

const Tweet = ({ text, created_at, id, user, children }) => {
    const { screen_name, name, profile_image_url } = user;

    const date = new Date(created_at).toLocaleString('en-gb', {
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className={styles.tweet} key={id}>
            <img
                alt={`Profile picture of ${name}`}
                className={styles.avatar}
                src={enlargeImage(profile_image_url)}
            />
            <article>
                <div className={styles.user}>
                    <h3>{name}</h3>
                    <h4>@{screen_name}</h4>
                    <time dateTime={created_at}>{date}</time>
                </div>
                <section className={styles.text}>
                    {createMentionLinks(text, id)}
                </section>
                {children}
            </article>
        </div>
    );
};

export function createMentionLinks(text) {
    const validUsername = /(@[a-zA-Z0-9_]+)/gi;
    const splitText = text.split(validUsername);

    // in the designs hashtags are blue - would need to split
    // these out too to do this
    const processedText = splitText.map(
        (section, index) =>
            section.startsWith('@') ? (
                <Link
                    className={styles.link}
                    key={`${section}${index}`}
                    to={`${section.substring(1)}`}
                >
                    {section}
                </Link>
            ) : (
                section
            )
    );

    return processedText;
}

export default Tweet;
