import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'
import Uploader from '../components/Uploader'

export default observer(() => {
  const {UserStore} = useStores()
  const User = () => <>Hello~{UserStore.currentUser.attributes.username}</>
  return (
    <>
      <h1>{UserStore.currentUser ? <User/> : <>请登陆</>}</h1>
      <Uploader />
    </>
  )
}
)



