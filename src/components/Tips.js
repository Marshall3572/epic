import React from 'react'
import {useStores} from '../stores/index'
import {observer} from 'mobx-react'
import styled from 'styled-components'

const Tips = styled.div`
  background: orange;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 30px 0;
  
`

export default observer(({children}) => {
  // eslint-disable-next-line no-unused-vars
  const {UserStore} = useStores()

  return (
    <>
      {UserStore.currentUser ? null : <Tips>{children}</Tips>}
    </>
  )
})