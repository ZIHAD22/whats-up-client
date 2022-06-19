const useSetAccessToken = () => {
  const setAccessToken = (accessToken) => {
    console.log(accessToken)
    localStorage.setItem('accessToken', accessToken)
  }

  return [setAccessToken]
}

export default useSetAccessToken
