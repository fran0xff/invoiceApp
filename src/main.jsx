import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InvoiceApp } from './invoiceApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoiceApp/>
  </StrictMode>,
)
