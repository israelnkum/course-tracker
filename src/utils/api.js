import axios from 'axios'

/**
 *
 * @returns {AxiosInstance}
 */
export default function api() {
    const makeRequest = axios.create({
        baseURL: process.env.REACT_APP_AIRTABLE_BASE_URL + process.env.REACT_APP_AIRTABLE_BASE_ID,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
    })

    makeRequest.interceptors.request.use(function (config) {
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    makeRequest.interceptors.response.use(response => {
            return response
        }, error => {
            return Promise.reject(error)
        }
    )

    return makeRequest
}
