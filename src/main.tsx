import { createRoot } from 'react-dom/client';
import App from './App'; 
import './index.css';
import { GlobalProvider } from './context/globalVariables';

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(
    // <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
    // </React.StrictMode>,
  );
}