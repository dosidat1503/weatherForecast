 
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { GlobalProvider } from './context/globalVariables.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <GlobalProvider>
    <App />
  </GlobalProvider>
  // </React.StrictMode>,
)
