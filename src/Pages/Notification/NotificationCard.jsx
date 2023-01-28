import React from 'react';
import ActiveFriend from '../Chat/ActiveFriend';
import curvedArrow from "../../img/curved-arrow-left.svg"


const NotificationCard = ({ data: { message, senderName, senderPic } }) => {
    return (
        <div className='m-2'>
            <div className='flex'>
                <div className=''>
                    <ActiveFriend activePic={senderPic} />
                </div>
                <div className='mt-2 ml-3'>
                    <p>{senderName} message you</p>
                    <div className='flex'>
                        <img className="w-[10px] mr-2" src={curvedArrow} alt="arrow" />
                        <small>{message}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;