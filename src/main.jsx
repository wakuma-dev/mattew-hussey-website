import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeProvider from './context/ThemeProvider.jsx';
import "./i18n";
import App from './App.jsx'
import RouteProvider from './context/RouteProvider.jsx';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </ThemeProvider>
  </StrictMode>,
);
