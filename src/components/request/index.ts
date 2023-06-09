import Request from './request'
import { BASE_URL, TIME_OUT } from './config'
const request = new Request({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    showLoading: true,
    interceptors: {
        requestSuccessInterceptor(config) {
            const { method, data } = config
            if (method === "get") {
                config.params = data
            }
            return config
        },
        requestErrorInterceptor(err) {
            console.log('Request实例请求失败的拦截器')
            return err
        },
        responseSuccessInterceptor(res) {
            return res?.data
        },
        responseErrorInterceptor(error) {
            console.log('Request实例响应失败的拦截器')
            if (error.request) {
                console.log(error.request)
            } else if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
            if (error && error.response) {
                switch (error.response.status) {
                    case 400: error.message = '请求错误(400)';
                        break;
                    case 401: error.message = '未授权，请重新登录(401)';
                        break;
                    case 403: error.message = '拒绝访问(403)';
                        break;
                    case 404: error.message = '请求出错(404)';
                        break;
                    case 408: error.message = '请求超时(408)';
                        break;
                    case 500: error.message = '服务器错误(500)';
                        break;
                    case 501: error.message = '服务未实现(501)';
                        break;
                    case 502: error.message = '网络错误(502)';
                        break;
                    case 503: error.message = '服务不可用(503)';
                        break;
                    case 504: error.message = '网络超时(504)';
                        break;
                    case 505: error.message = 'HTTP版本不受支持(505)';
                        break;
                    default: error.message = `连接出错(${error.response.status})!`;
                }
            } else {
                error.message = '连接服务器失败!'
            }
            return Promise.reject(error)
        }

    }
})

export default request
