import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'
import Uploader from '../components/Uploader'
import Tips from '../components/Tips'

export default observer(() => {
  const {UserStore} = useStores()
  const User = () => <>Hello~{UserStore.currentUser.attributes.username}</>
  return (
    <>
      <Tips>请先登陆在上传</Tips>
      <Uploader />
    </>
  )
}
)



