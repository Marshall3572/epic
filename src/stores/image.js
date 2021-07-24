import React from 'react'
import {observable, action, makeObservable} from 'mobx'
import {Uploader} from '../models'
import {message} from 'antd'

class ImageStore {
  constructor() {
    makeObservable(this)
  }

  @observable filename = ''
  @observable file = null
  @observable isUploading = false
  @observable serverFile = null

  @action setFilename(newFilename) {
    this.filename = newFilename
  }

  @action setFile(newFile) {
    this.file = newFile
  }

  @action upload() {
    this.isUploading = true
    // 若上传失败，上传结果展示的还是上次的结果，会让人产生误会，所以每次上传都清空一下
    this.serverFile = null

    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename).then(serverFile => {
        this.serverFile = serverFile
        resolve(serverFile)
      }).catch(err => {
        message.error('上传失败')
        reject(err)
      }).finally(() => {
        this.isUploading = false
      })
    })
  }
}


// export { UserStore } 不能直接这么写，最好是直接导出一个对象
export default new ImageStore()
