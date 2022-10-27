import React from 'react';
import ActiveFriend from '../Chat/ActiveFriend';
import curvedArrow from "../../img/curved-arrow-left.svg"


const NotificationCard = ({ activePic }) => {
    return (
        <div className='m-2'>
            <div className='flex'>
                <div className=''>
                    <ActiveFriend activePic={activePic} />
                </div>
                <div className='mt-2 ml-3'>
                    <p>MD ZIHAD message you</p>
                    <div className='flex'>
                        <img className="w-[10px] mr-2" src={curvedArrow} alt="arrow" />
                        <small>Hi Rohomot </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;