import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner';

const WelcomeChat = () => {
    const [user , loading] = useSelector(state => [state.authUser.user , state.authUser.authUserLoading])
    
    if(loading) {
        return <Spinner/>
    }

    return (
        <div className='text-center mt-8'>
            <h1 className='text-3xl'>Welcome</h1>
            <h1 className='text-xl'>{user.user.name}</h1>
        </div>
    );
};

export default WelcomeChat;