import { UserAddIcon } from '@heroicons/react/solid';
import axios from '../../util/axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActiveFriend from './ActiveFriend';
import { fetchUserConversation } from '../../features/chat/conversationUserSlice';
import { getRemovedAfterAddUsersToConversation } from '../../features/chat/allUserSlice';
import { toast } from 'react-toastify';

const AddConversationFriend = ({ name, image, userId }) => {
    const dispatch = useDispatch()
    const [authUser, allUnfriendUsers] = useSelector(state => [state.authUser.user.user, state.allUser.addFriendUsers.users])
    const handleCreateConversation = async () => {
        const { data: createConversation } = await axios.post("/conversation", {
            senderId: authUser._id,
            receiverId: userId
        })
        dispatch(fetchUserConversation())
        deleteUsersFromSearchAfterAdd()

    }

    const deleteUsersFromSearchAfterAdd = () => {
        const filter = allUnfriendUsers.filter(user => user._id !== userId)
        dispatch(getRemovedAfterAddUsersToConversation(filter))
        toast.success(`${name} now in your conversation`)
    }
    return (
        <div className='text-right'>
            <div className='grid grid-cols-2 md:grid-cols-2 place-content-center overflow-hidden'>
                <div className="grid grid-cols-3 md:w-[300px]  h-[50px] overflow-hidden justify-items-center hover:bg-[#30af91a1] bg-[#30AF91] cursor-pointer text-white px-1 py-2 rounded-lg my-2">
                    <ActiveFriend activePic={image} width="w-[40px]" />
                    <div className="col-span-2">
                        <h1 className='text-sm md:text-base'>{name}</h1>
                    </div>
                </div>
                <div>
                    <button className='btn my-2 mr-3' onClick={handleCreateConversation} ><UserAddIcon className="h-8 w-8 cursor-pointer text-white" /></button>
                </div>
            </div>
        </div>
    );
};

export default AddConversationFriend;