import {Route, Routes, Link} from 'react-router-dom'
import './App.css'
import Red from './component/Red'
import Blue from './component/Blue'
import Home from './component/Home'
import Orange from './component/Orange'
import Yellow from './component/Yellow'
import Green from './component/Green'
import Indigo from './component/Indigo'
import Violet from './component/Violet'


function App() {

  return (
    <>
      <div id='container'>
        <div id='navbar'>
          <Link to="/">Home</Link>
          <Link to="/red">Red</Link>
          <Link to="/orange">Orange</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/green">Green</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/indigo">Indigo</Link>
          <Link to="/violet">Violet</Link>
        </div>
        <div id='main-section'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/red' element={<Red />} />
            <Route path='/orange' element={<Orange />} />
            <Route path='/yellow' element={<Yellow />} />
            <Route path='/green' element={<Green />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/indigo' element={<Indigo />} />
            <Route path='/violet' element={<Violet />} />
          </Routes>
        </div>
        <div id='footer'>
          <Link to="/red">Red</Link>
          <Link to="/orange">Orange</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/green">Green</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/indigo">Indigo</Link>
          <Link to="/violet">Violet</Link>
        </div>
      </div>
    </>
  )
}

export default App
