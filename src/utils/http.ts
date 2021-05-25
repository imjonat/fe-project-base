import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { stringify } from 'query-string'
import { message } from 'antd'

export function createHttp<T = AxiosInstance>(config?: AxiosRequestConfig): T {
  const Http: AxiosInstance = axios.create({
    baseURL: '/api/',
    timeout: 60000,
    withCredentials: true,
    paramsSerializer: function (params) {
      return stringify(params, { arrayFormat: 'bracket' })
    },
    ...config
  })

  return Http as any
}

export const interceptResponse = (instance: any) => {
  instance.interceptors.response.use((response: any) => {
    const { data } = response
    if (!data?.success) {
      const { disableErrorMessage, formatErrorMessage } = response.config

      let msg
      if (!disableErrorMessage) {
        msg = data?.message
        if (formatErrorMessage) {
          msg = formatErrorMessage(msg)
        }
        message.error(msg)
      }
      return Promise.reject({
        ...data,
        message: msg
      })
    }

    return response
  })

  return instance
}

export const Http = interceptResponse(createHttp())
