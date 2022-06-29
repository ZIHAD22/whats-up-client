const useSetAccessToken = () => {
  const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken)
  }

  return [setAccessToken]
}

export default useSetAccessToken
