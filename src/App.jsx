import React from 'react';
import './App.css'
import Home from './Components/Home'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import PageNotFound from './Components/PageNotFound'
import Products from './Components/Products'
import FeaturedProducts from './Components/FeaturedProducts'
import NewProducts from './Components/NewProducts'
import User from './Components/User'
import UserDetails from './Components/UserDetails'
import Admin from './Components/Admin'
const LazyAbout = React.lazy(() => import('./Components/About'))
import { AuthProvider } from './utils/auth';
import Profile from './Components/Profile';
import Login from './Components/Login';
import { RequireAuth } from './utils/RequireAuth';

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<React.Suspense fallback="Loading....."><LazyAbout/></React.Suspense>}></Route>
        <Route path="/order-summary" element={<OrderSummary/>}></Route>
        <Route path="/products" element={<Products/>}>
        {/* index route shares the path of the parent route */}
          <Route index element={<FeaturedProducts/>}></Route>  
          <Route path="featured" element={<FeaturedProducts/>}></Route>
          <Route path="new" element={<NewProducts/>}></Route>
        </Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="user/:userId" element={<UserDetails/>}></Route>
        <Route path="user/admin" element={<Admin/>}></Route>
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>                        
    
    </AuthProvider>
  )
}

export default App
