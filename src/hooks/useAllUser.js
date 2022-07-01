import { useEffect, useState } from "react";
import axios from "../util/axios";
const useAllUser = () => {
    const [allUsers , setAllUser] = useState([])
    useEffect(() => {
        axios.get("auth/allUser")
            .then(({data: res}) => {
            if(res.success){
                setAllUser(res.result)
            }
            })
    } , [])
    return [allUsers]
}

export default useAllUser