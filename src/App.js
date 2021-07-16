import {Switch, Route} from 'react-router-dom'

import './App.css'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {History} from './pages/History'
import {About} from './pages/About'


function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        {/*exact表示严格匹配模式，加了后代就无法匹配自己*/}
        <Route path="/" exact component={Home}/>
        <Route path="/history" component={History}/>
        <Route path="/about" component={About}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
