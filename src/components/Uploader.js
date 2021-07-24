import React, {useRef} from 'react'
import {useStores} from '../stores'
import {observer, useLocalStore} from 'mobx-react'
import {InboxOutlined} from '@ant-design/icons'
import {Upload, message} from 'antd'
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
        // if (UserStore.currentUser == null) {
        //   message.warning('请先登陆再上传')
        // } else {
        ImageStore.upload()
          .then((serverFile) => {
              console.log('上传成功')
              console.log(serverFile)
            }
          ).catch(() => console.log('上传失败'))
        // }
        return false
      }
    }

    return (
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined/>
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>

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