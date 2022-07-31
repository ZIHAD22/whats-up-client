import axios from "../util/axios"
import { useEffect, useState } from "react"

const useSelectedFriend = (id) => {
    const [selectedFriend , setSelectedFriend] = useState()
      

    useEffect(() => {
        axios.get(`auth/alluser/${id}`)
            .then(res => {
                const {result} = res.data
                const user = result
                setSelectedFriend(user)
            })
    } , [ id])


    return [selectedFriend]
}

export default useSelectedFriend