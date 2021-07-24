import React, {useRef} from 'react'
import {useStores} from '../stores'
import {observer, useLocalStore} from 'mobx-react'
import {InboxOutlined} from '@ant-design/icons'
import {Upload, message, Spin} from 'antd'
import styled from 'styled-components'
import image from '../stores/image'

const {Dragger} = Upload

const Result = styled.div`
  margin-top: 30px;
  border: 1px dashed #ccc;
  padding: 20px;
`
const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`
const Image = styled.img`
  max-width: 300px;
`


const Component = observer(() => {
    const {ImageStore, UserStore} = useStores()
    const ref1 = useRef(), ref2 = useRef()
    // 返回值要加个括号，不然会被理解为函数体
    const store = useLocalStore(() => ({
      width: null,
      height: null,
      get widthStr() {
        return store.width ? `/w/${store.width}` : ''
      },
      get heightStr() {
        return store.height ? `/h/${store.height}` : ''
      },
      get fullStr() {
        return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
      },
      setHeight(height) {
        store.height = height
      },
      setWidth(width) {
        store.width = width
      },
    }))

    const bindWidthChange = () => {
      store.setWidth(ref1.current.value)
    }
    const bindHeightChange = () => {
      store.setHeight(ref2.current.value)
    }
    const props = {
      showUploadList: false,
      beforeUpload: file => {
        ImageStore.setFile(file)
        ImageStore.setFilename(file.name)
        if (UserStore.currentUser == null) {
          message.warning('请先登陆再上传')
          return false
        }
        // 可以在控制台看到文件的api
        window.file = file

        // .ig是指忽略大小写
        if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
          message.error('只能上传.png/.gif/.jpg/.svg格式的图片')
          return false
        }
        if (file.size > 1024 * 1024) {
          message.error('最大上传1M图片')
          return false
        }
        ImageStore.upload()
          .then((serverFile) => {
              console.log('上传成功')
            }
          ).catch(() => console.log('上传失败'))
        return false
      }
    }

    return (
      <div>
        <Spin tip='上传中' spinning={ImageStore.isUploading}>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined/>
            </p>
            <p className="ant-upload-text">点击或者拖拽上传图片</p>
            <p className="ant-upload-hint">
              仅支持.png/.gif/.jpg/.svg格式的图片，图片最大1M
            </p>
          </Dragger>
        </Spin>
        {
          ImageStore.serverFile ?
            <Result>
              <H1>上传结果</H1>
              <dl>
                <dt>线上地址</dt>
                <dd><a target="_blank"
                       href={ImageStore.serverFile.attributes.url.attributes.url}>{ImageStore.serverFile.attributes.url.attributes.url}</a>
                </dd>
                <dt>文件名</dt>
                <dd>{ImageStore.filename}</dd>
                <dt>图片预览</dt>
                <dd>
                  <Image src={ImageStore.serverFile.attributes.url.attributes.url}/>
                </dd>
                <dt>更多尺寸</dt>
                <dd>
                  <input ref={ref1} onChange={bindWidthChange} placeholder="最大宽度（可选）"/>
                  <input ref={ref2} onChange={bindHeightChange} placeholder="最大高度（可选）"/>
                </dd>
                <dd>
                  <a target="_blank" href={store.fullStr}>{store.fullStr}</a>
                </dd>
              </dl>
            </Result> : null
        }
      </div>
    )
  }
)

export default Component