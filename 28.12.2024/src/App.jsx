import './App.css';
import { Route, Routes } from "react-router-dom";
import ClientLayouts from './components/Client';
import Home from './page/Home';
import Products from './page/Products';
import Favorites from './page/Favorite';
import Contact from './page/Contact';
import ProductDetails from './page/ProductDetails';
import AdminLayouts from './components/Admin';
import Dashboard from './page/Admin/Dashboard';
import NotFound from './page/NotFound';
import AddProduct from './page/Admin/AddProduct';
import AdminProducts from './page/Admin/Products';
import Basket from './page/Basket';

function App() {
  return (
    <Routes>
      {/* Клиентская часть */}
      <Route path='/' element={<ClientLayouts />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
      </Route>

      {/* Админская часть */}
      <Route path="/admin/*" element={<AdminLayouts />}>
        <Route index element={<Dashboard />} />
        <Route path="products">
          <Route index element={<AdminProducts />} />
          <Route path="add" element={<AddProduct />} />
        </Route>
      </Route>

      {/* Страница не найдена */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;


