import React from 'react'
import Logo from '../logo.svg'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <img src={Logo}/>
      <nav>
        <Link to='/'>首页</Link>
        <Link to='/history'>上传历史</Link>
        <Link to='/about'>关于我</Link>
      </nav>
    </div>
  )
}

