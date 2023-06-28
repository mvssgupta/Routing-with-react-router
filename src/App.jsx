import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
