import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "sonner"
import AppRoute from './routes/app-route'
import { FallbackPage } from './components/lazy'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FallbackPage />}>
        <AppRoute />
        <Toaster richColors />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>,
)
