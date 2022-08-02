import { useEffect, useState } from "react";
import axios from "../util/axios";
import { useQuery } from "@tanstack/react-query";
import useAuthUser from "./useAuthUser";
const useAllUser = () => {
  const [user, loading] = useAuthUser();

  const userEmail = user.user?.email;
  // useEffect(() => {
  //     if(!loading){
  //         const loginUser = userEmail
  //         axios.get(`auth/allUser?email=${loginUser}`)
  //         .then(({data: res}) => {
  //         if(res.success){
  //             setAllUser(res.result)
  //         }
  //         })
  //     }
  // } , [loading , userEmail ])

  const {
    data: allSelectUser,
    refetch,
    isLoading,
    isError,
  } = useQuery(["allSelectedUser", loading], async () => {
    if (userEmail) {
      const loginUser = userEmail;
      const { data } = await axios.get(`auth/allUser?email=${loginUser}`);
      return data;
    }
  });

  const allUsers = allSelectUser?.result;
  return [allUsers, isLoading, refetch];
};

export default useAllUser;
