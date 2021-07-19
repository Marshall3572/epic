import React, {Suspense, lazy} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import {Switch, Route} from 'react-router-dom'

// import {Home} from './pages/Home'
// import {History} from './pages/History'
// import {About} from './pages/About'
const Home = lazy(() => import('./pages/Home'))
  // .then(res => ({default: res.History} ) )
const History = lazy(() => import('./pages/History'))
const About = lazy(() => import('./pages/About'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

function App() {
  // .then(res => ({default:res.History}))
  // console.log('alias导出：',import('./pages/History').then(res => ({default:res.History})))
  // console.log('default导出：',import('./pages/Home'))
  return (
    <>
      <Header/>
      <main>
        {/*添加suspense和fallback机制，让分包加载的时候显示loading的状态*/}
        <Suspense fallback={<Loading/>}>
          <Switch>
            {/*exact表示严格匹配模式，加了后代就无法匹配自己*/}
            <Route path="/" exact component={Home}/>
            <Route path="/history" component={History}/>
            <Route path="/about" component={About}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
          </Switch>
        </Suspense>
      </main>
      <Footer/>
    </>
  )
}

export default App