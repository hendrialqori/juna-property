import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "sonner"
import AppRoute from './routes/app-route'
import { FallbackPage } from './components/lazy'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<FallbackPage />}>
      <AppRoute />
      <Toaster richColors />
    </Suspense>
  </StrictMode>,
)
