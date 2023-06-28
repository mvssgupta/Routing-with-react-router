import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import PageNotFound from './Components/PageNotFound'
import Products from './Components/Products'
import FeaturedProducts from './Components/FeaturedProducts'
import NewProducts from './Components/NewProducts'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/order-summary" element={<OrderSummary/>}></Route>
        <Route path="/products" element={<Products/>}>
          <Route path="featured" element={<FeaturedProducts/>}></Route>
          <Route path="new" element={<NewProducts/>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>                        
    
    </>
  )
}

export default App
