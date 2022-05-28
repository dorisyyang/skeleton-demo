import axios from 'axios'

export const instance = axios.create({
    timeout: 5000,
    headers: {
        'Content-Encoding': 'gzip',
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json, text/plain, */*',
    },
})

// Add a request interceptor
// 全局请求拦截，发送请求之前执行
instance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
// 请求返回之后执行
instance.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        if (response.status === 200) {
            return Promise.resolve(response)
        }
        return Promise.reject(response)
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        if (error && error.response) {
            switch (error.response.status) {
                case 401:
                    /*Unauthorized*/
                    error.message = 'Unauthorized'
                    break
                case 403:
                    /*Forbidden*/
                    error.message = 'Forbidden'
                    break
                case 404:
                    /*Not Found*/
                    error.message = 'Not Found'
                    break
                case 500:
                    /*Internal Server Error*/
                    error.message = 'Internal Server Error'
                    break
                case 502:
                    /*Bad Gateway*/
                    error.message = 'Bad Gateway'
                    break
                case 504:
                    /*Gateway Timeout*/
                    error.message = 'Gateway Timeout'
                    break
                default:
                    break
            }
        } else {
            if (error.code === 'ECONNABORTED' && error.toString().indexOf('timeout') !== -1) {
                error.message = 'Request timeout'
            } else if (error.toString().indexOf('Network Error') !== -1) {
                error.message = 'Network Error'
            }
        }
        return Promise.reject(error)
    }
)

/**
 * get请求
 * @param {*} url     请求地址
 * @param {*} config
 */
export function get(url, config = {}) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, config)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * post请求
 * @param {*} url     请求地址
 * @param {*} data
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * put请求
 * @param {*} url     请求地址
 * @param {*} data
 */
export function put(url, data) {
    return new Promise((resolve, reject) => {
        instance
            .put(url, data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * patch请求
 * @param {*} url     请求地址
 * @param {*} data
 */
export function patch(url, data) {
    return new Promise((resolve, reject) => {
        instance
            .patch(url, data)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * delete请求
 * @param {*} url     请求地址
 */
export function del(url) {
    return new Promise((resolve, reject) => {
        instance
            .delete(url)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
