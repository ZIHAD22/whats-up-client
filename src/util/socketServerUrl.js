const getSocketServerUrl = () => {
    let url

    if (process.env.NODE_ENV === 'development') {
        url = process.env.REACT_APP_SOCKET_SERVER_LOCAL_URL
    } else {
        url = process.env.REACT_APP_SOCKET_SERVER_ONLINE_URL
    }

    console.log(url);

    return url
}


export default getSocketServerUrl