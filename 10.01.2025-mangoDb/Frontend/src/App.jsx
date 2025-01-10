import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/ClientLayouts'
import Home from './page/Client/Home'
import Favorites from './page/Client/Favorites'
import Basket from './page/Client/Basket'
import AdminLayout from './components/AdminLayouuts'
import Dashboard from './page/admin/Dashboard'
import AddProduct from './page/admin/AddProduct'
import TableProducts from './page/admin/TableProducts'
import NotFound from './page/admin/404NotFound'
import Contacts from './page/Client/Contacts'
import Details from './page/Client/Details'
import { useEffect, useState } from 'react'
import Loader from './components/Loading'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <> 
     {isLoading ? (
        <Loader /> 
      ) : (
      <>
 <Routes>
  <Route path = "/" element = {<ClientLayout />}>
<Route index element = {<Home />}/>
<Route path = "/Favorite" element = {<Favorites />}/>
<Route path = "/Basket" element = {<Basket />}/>
<Route path = "/contacts" element = {<Contacts />}/>
<Route path="/details/:id" element={<Details />}/>
  </Route>

  <Route path = "/admin" element = {<AdminLayout />}>
<Route index element = {<Dashboard />}/>
<Route path = "Addproduct" element = {<AddProduct />}/>
<Route path = "TableProducts" element = {<TableProducts />}/>
  </Route>
  <Route path="*" element={<NotFound />} />
 </Routes>
    </>
      )}
    </>
      
  )
}

export default App
