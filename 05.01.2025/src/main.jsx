import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { magazin} from './redux/app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={magazin}>
      <App />
  </Provider>
  

)
