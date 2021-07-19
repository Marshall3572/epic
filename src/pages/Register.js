import React, {useRef} from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'

const Component = observer(()=> {
  const { AuthStore } = useStores();
  const inputRef = useRef()

  const bindChange = (e) => {
    // console.log(inputRef.current.value)
    AuthStore.setUsername(inputRef.current.value)
  }

  return (
    <>
      <h1>Register: {AuthStore.values.username}</h1>
    </>
  );
})

export default Component