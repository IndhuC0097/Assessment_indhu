import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blog from './components/Blog'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/> 
    {/* <Blog/> */}

    <Routes>
  
  <Route path='/h' element={<Home/>}/>
  <Route path='/b' element={<Blog/>}/>

 </Routes>
    </>
  )
}

export default App
