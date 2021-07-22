import AV, {Query, User} from 'leancloud-storage'
import resolve from 'resolve'

AV.init({
  appId: 'NMaRGoaksIqBex94eqsQm1t5-gzGzoHsz',
  appKey: 'HROcGnttJRHfwLsFD4gyRsRo',
  serverURL: 'https://nmargoak.lc-cn-n1-shared.com'
})

const Auth = {
  // 如果不是用的leanCloud，这里的代码可以替换成ajax请求，一样的
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },
  logout() {
    User.logOut()
  },
  getCurrentUser() {
    return User.current()
  }
}

const Uploader = {
  add: function (file, filename) {
    const item = new AV.Object('Image')
    const avFile = new AV.File(filename, file)
    item.set('filename', filename)
    item.set('owner', AV.User.current())
    item.set('url', avFile)
    return new Promise((resolve, reject) => {
      item.save().then(serverfile => resolve(serverfile), err => reject(err))
    })
  }
}

export {
  // 先把这一个API暴露出去，后边有再加
  Auth,
  Uploader
}