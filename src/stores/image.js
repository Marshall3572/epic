import React from 'react'
import {observable, action, makeObservable} from 'mobx'
import {Uploader} from '../models'

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

  @action upload() {
    this.isUploading = true
    return new Promise((resolve, reject) => {
      Uploader.add(this.filename, this.file).then(serverFile => {
        console.log('上传成功')
        this.serverFile = serverFile
        resolve(serverFile)
      }).catch(err => {
        console.log('上传失败')
        reject(err)
      }).finally(() => {
        this.isUploading = false
      })
    })
  }
}


// export { UserStore } 不能直接这么写，最好是直接导出一个对象
export default new ImageStore()
