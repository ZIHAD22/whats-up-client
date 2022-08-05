import axios from "../util/axios";
import { useQuery } from "@tanstack/react-query";
import useAuthUser from "./useAuthUser";
const useAllUser = (searchKey) => {
  const [user, loading] = useAuthUser();

  const userEmail = user.user?.email;
  const {
    data: allSelectUser,
    refetch,
    isLoading,
  } = useQuery(["allSelectedUser", loading, searchKey], async () => {
    if (userEmail && !searchKey) {
      const loginUser = userEmail;
      const { data } = await axios.get(`auth/allUser?email=${loginUser}`);
      return data;
    } else if (userEmail && searchKey) {
      const loginUser = userEmail;
      const lowerSearchKey = searchKey.toLowerCase();
      const { data } = await axios.get(
        `auth/allUser?email=${loginUser}&searchKey=${lowerSearchKey}`
      );

      console.log(data);
      return data;
    }
  });

  const allUsers = allSelectUser?.result;
  return [allUsers, isLoading, refetch];
};

export default useAllUser;
