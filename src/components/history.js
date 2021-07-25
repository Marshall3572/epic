import React from 'react'
import {Uploader} from '../models'
import {message} from 'antd'
import {action, observable} from 'mobx'

class History {
  @observable list = []
  @observable isLoading = false
  @observable hasMore = true
  @observable page = 0
  limit = 10

  @action append(newList) {
    this.list = this.list.concat(newList)
  }

  @action find() {
    this.isLoading = true
    Uploader.find({page: this.page, limit: this.limit})
      .then(newList => {
        this.append(newList)
        if (newList.length < this.limit) {
          this.hasMore = false
        }
      })
      .catch(err => message.error('加载数据失败'))
      .finally(() => {
        this.isLoading = false
      })
  }

}