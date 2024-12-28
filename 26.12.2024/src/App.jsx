import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './layouts/Admin/Footer';
// import Header from './layouts/Admin/Header';
import NotFound from './Components/NotFound/INDEX.JSX';
import Contact from './Components/Contact';
import Products from './components/ProductsCards';
import ProductDetails from './Components/ProductDetails';
import ClientLayout from './Components/Client/ClientLayouts';
import AdminLayout from './components/Admin/AdminLayouts';

function App() {
  return (
    <>
      <Routes>
       
        <Route path="/" element={<ClientLayout />}>
          {/* <Route index element={<Home />} /> */}
          
          <Route path="/contact" element={<Contact />} />
          
          
          <Route path="/products">
            <Route index element={<Products />} /> 
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products">
            <Route index element={<Products />} /> 
            <Route path=":id" element={<ProductDetails />} />
          </Route>        
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;


