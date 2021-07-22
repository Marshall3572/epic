import React, {useRef} from 'react'
import {useStores} from '../stores'
import {observer} from 'mobx-react'

const Component = observer(() => {
  const {ImageStore} = useStores()
  const ref = useRef()
  const bindChange = () => {
    // 调试
    console.log(ref.current)
    if (ref.current.files.length > 0) {
      ImageStore.setFile(ref.current.files[0])
      ImageStore.setFilename(ref.current.files[0].name)
      ImageStore.upload()
        .then((serverFile) => {
            console.log('上传成功')
            console.log(serverFile)
          }
        )
        .catch(() => console.log('上传失败'))
    }
    window.file = ref.current
  }

  return (
    <div>
      <h1>文件上传</h1>
      <input type="file" ref={ref} onChange={bindChange}/>
    </div>
  )
})

export default Component