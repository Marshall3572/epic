import {observable, action, makeObservable} from 'mobx'
import {Auth} from '../models'
import UserStore from './user'
import {message} from 'antd'

class AuthStore {
  constructor() {
    makeObservable(this)
  }

  @observable values = {
    username: '',
    password: ''
  }

  @action setUsername(username) {
    this.values.username = username
  }

  @action setPassword(password) {
    this.values.password = password
  }

  @action login() {
    // 因为登陆成功后可能要执行跳转回首页等操作，所以我们用Promise进行封装，可以回调
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password)
        .then(user => {
          UserStore.pullUser()
          message.info('登陆成功')
          resolve(user)
        })
        .catch(err => {
          UserStore.resetUser()
          message.error('登陆失败')
          reject(err)
        })
    })
  }

  @action register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then(user => {
          UserStore.pullUser()
          message.info('注册成功')
          resolve(user)
        })
        .catch(err => {
          UserStore.resetUser()
          message.error('注册失败')
          reject(err)
        })
    })
  }

  @action logout() {
    Auth.logout()
    UserStore.resetUser()
  }
}

export default new AuthStore()
