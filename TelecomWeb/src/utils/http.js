import {AxiosInstance as axios} from 'axios'

axios.defaults.baseURL = 'http://localhost:8090/api'

export function get (url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res.data)
    })
      .catch(err => {
        reject(err.data)
      })
  })
}
