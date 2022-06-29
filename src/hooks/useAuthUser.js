import axios from '../util/axios'
import { useEffect } from 'react'
import { useState } from 'react'

const useAuthUser = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get('auth/authUser')
      .then((res) => {
        const { data } = res
        setUser(data)
        setLoading(false)
      })
      .catch((e) => {
        if (e.response.status === 403 || e.response.status === 401) {
          setLoading(false)
        }
      })
  }, [])

  return [user, loading]
}

export default useAuthUser
