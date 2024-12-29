
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';
import {BasketProvider} from "../src/components/Context/BasketContext"
import {FavoritesProvider} from "../src/components/Context/FavoritesContext"

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
      <FavoritesProvider>
         <BasketProvider>
         <BrowserRouter>
    <App />
  </BrowserRouter>
      </BasketProvider> 
      </FavoritesProvider>   
  </HelmetProvider>
 
)
