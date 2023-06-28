import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import PageNotFound from './Components/PageNotFound'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/order-summary" element={<OrderSummary/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
