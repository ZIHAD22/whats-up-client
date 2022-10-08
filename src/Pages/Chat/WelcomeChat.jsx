import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeChat = () => {
    const [user , loading] = useSelector(state => [state.authUser.user , state.authUser.authUserLoading])
    
    return (
        <div className='text-center mt-8 text-2xl'>
            <h1>Welcome</h1>
            <h1>{user.user.name}</h1>
        </div>
    );
};

export default WelcomeChat;