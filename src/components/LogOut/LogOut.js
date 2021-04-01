import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const LogOut = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const handleLogOut = () => {
        setLoggedInUser({})
        history.replace("/")
    }

    return (
        <div>
            {handleLogOut()}
        </div>
    );
};

export default LogOut;