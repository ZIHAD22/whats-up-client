import { useEffect, useState } from "react";
import axios from "../util/axios";
import useAuthUser from "./useAuthUser";
const useAllUser = () => {
    const [allUsers , setAllUser] = useState([])
    
    const [user , loading] = useAuthUser()

    // console.log(user.user?.email);
    useEffect(() => {
        if(!loading){
            const loginUser = user.user?.email
            axios.get(`auth/allUser?email=${loginUser}`)
            .then(({data: res}) => {
            if(res.success){
                setAllUser(res.result)
            }
            })
        }
    } , [loading])
    return [allUsers , user.user?.email]
}

export default useAllUser