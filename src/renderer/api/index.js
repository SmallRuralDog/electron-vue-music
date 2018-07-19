import http from '../utils/http'

//手机登录
export function login(phone, password) {
    return http.get('/login/cellphone?phone=' + this.phone + '&password=' + this.password)
}

export function banner() {
    return http.get('/banner')
}

export function personalized() {
    return http.get('/personalized')
}
