import axios from 'axios'

let setBaseUrl

if (process.env.NODE_ENV === 'development') {
  setBaseUrl = process.env.REACT_APP_LOCAL_SERVER_URL
} else {
  setBaseUrl = process.env.REACT_APP_HOSTED_SERVER_URL
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.baseURL = setBaseUrl
    config.headers.authorization = `${localStorage.getItem('accessToken')} `
    // console.log(config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axios
