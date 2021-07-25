import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'
import InfiniteScroll from 'react-infinite-scroller'
import {List, Spin} from 'antd'

export default observer(() => {
  const {HistoryStore} = useStores()
  const loadMore = () => {
    HistoryStore.find()
  }
  const options = {
    initialLoad: true,
    pageStart: 0,
    loadMore: loadMore,
    hasMore: !HistoryStore.isLoading && HistoryStore.hasMore,
    useWindow: true
  }

  return (
    <InfiniteScroll {...options}>
      <List dataSource={HistoryStore.list}
            renderItem={
              item => (<List.Item key={item.id}>
                <div>
                  <img src={item.attributes.url.attributes.url} style={{height: '100px'}}/>
                </div>
                <div>
                  <h5>{item.attributes.filename}</h5>
                </div>
                <div>
                  <a target='_blank' href={item.attributes.url.attributes.url}>{item.attributes.url.attributes.url}</a>
                </div>
              </List.Item>)
            }>
        {HistoryStore.isLoading && HistoryStore.hasMore && (
          <div>
            <Spin tips={'加载中...'}/>
          </div>
        )}
      </List>
      {HistoryStore.isLoading && HistoryStore}
    </InfiniteScroll>
  )
})