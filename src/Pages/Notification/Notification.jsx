import React from 'react';
import { useDispatch } from 'react-redux';
import { handleNotificationModal } from '../../features/notification/notificationSlice';
import "./Notification.css"
import NotificationCard from './NotificationCard';

const Notification = () => {
    const dispatch = useDispatch()
    const user = {
        name: "MD ZIHAD",
        profilePic: "https://i.ibb.co/HVnmBnY/dummy-profile-pic-300x300.png",
        _id: "01"
    }
    return (
        <div className='overflow-y-auto no-scrollbarChrome no-scrollbarFirefox mt-14 absolute bg-white md:h-[510px] md:w-[325px] h-screen w-screen z-10 shadow-2xl shadow-black rounded-lg' >
            <div className=''>
                <button onClick={() => dispatch(handleNotificationModal(false))} className="btn btn-circle btn-outline fixed right-2 md:absolute top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div>
                <h1 className='text-center text-3xl mt-5 text-primary'>Notification</h1>
            </div>
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
            <NotificationCard activePic={user.profilePic} />
        </div>
    );
};

export default Notification;