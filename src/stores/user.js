import {observable, action, makeObservable} from 'mobx'
import {Auth} from '../models'

class UserStore {
  constructor() {
    makeObservable(this)
  }

  @observable currentUser = null

  @action pullUser() {
    this.currentUser = Auth.getCurrentUser()
  }

  @action resetUser() {
    this.currentUser = null
  }

}


// export { UserStore } 不能直接这么写，最好是直接导出一个对象
export default new UserStore()
