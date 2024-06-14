import  { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Please Login</div>;
    }

    return <div>Welcome to Login {user.username}</div>;
}

export default Profile;
