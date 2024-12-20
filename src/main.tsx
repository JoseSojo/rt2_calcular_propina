import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CurrencyProvider } from './context/CurrencyContext.tsx'
import { ModeProvider } from './context/ModeContext.tsx'
import { TranslateProvider } from './context/LanguajeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <CurrencyProvider>
    <ModeProvider>
      <TranslateProvider>
        <App />
      </TranslateProvider>
    </ModeProvider>
  </CurrencyProvider>
)
