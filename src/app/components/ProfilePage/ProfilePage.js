import React from 'react';
import { Query } from 'react-apollo';
import Profile from './Profile/Profile';
import Feed from './Feed/Feed';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import getUser from '../../queries/getUser';
import styles from './ProfilePage.css';

export const ProfilePage = ({ loading, error, data }) => {
    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    const { tweets, ...restProps } = data.twitter.user;

    return (
        <div className={styles.profilepage}>
            <Profile
                {...restProps}
                following={120}
                cover_image_url="https://images.unsplash.com/photo-1531951286638-d1b6cdae30c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78d69f6595028931f9b88466dcd54ca9&auto=format&fit=crop&w=800&q=80"
            />
            <Feed tweets={tweets} />
        </div>
    );
};

const ProfilePageWithData = ({ match }) => (
    <Query query={getUser(match.params.profileName)}>{ProfilePage}</Query>
);

export default ProfilePageWithData;
