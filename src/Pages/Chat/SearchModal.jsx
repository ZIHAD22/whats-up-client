import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner';
import { getSearchKey, searchForAddUsersToConversation, searchUsersData } from '../../features/chat/allUserSlice';
import AddConversationFriend from './AddConversationFriend';

const SearchModal = () => {
    const dispatch = useDispatch()
    const [searchKey, allUnFriendUsers, allUnFrnIsLoading, authUser] = useSelector(state => [state.allUser.userSearch.searchKey, state.allUser.addFriendUsers.users, state.allUser.addFriendUsers.isLoading, state.authUser.user.user])

    const handleUserSearch = (e) => {
        dispatch(getSearchKey(e.target.value))
        dispatch(searchForAddUsersToConversation(authUser._id))
    }

    return (
        <div>
            <input type="checkbox" id="search-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="search-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='text-center h-[500px] overflow-hidden'>
                        <div>
                            <h1 className='text-xl mb-4'>Search People For Start Conversation</h1>
                            <input
                                type="text"
                                onChange={handleUserSearch}
                                value={searchKey}
                                placeholder="Search People and chats"
                                className="input input-bordered input-primary w-full max-w-xs"
                            />
                        </div>
                        <div className='overflow-scroll h-[400px] overflow-x-hidden mt-10 pb-16 md:pb-10 no-scrollbarChrome no-scrollbarFirefox'>
                            {allUnFrnIsLoading ? <Spinner spinnerAlign="mx-auto" /> :
                                <>
                                    {allUnFriendUsers?.length === 0 && !allUnFrnIsLoading && <h1>No User Found</h1>}
                                    {allUnFriendUsers?.map(user => <AddConversationFriend key={user._id} userId={user._id} name={user.name} image={user.profilePic} />)}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;