import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Forms from './components/forms.jsx'
import Form2 from './components/form2.jsx'
import Form3 from './components/form3.jsx'
import Form4 from './components/form4.jsx'
import Forms5 from './components/forms5.jsx'
import Forms6 from './components/forms6.jsx'

const router = createBrowserRouter([
  { path: '/Task-Mrchams/', element: <App /> },
  { path: '/Task-Mrchams/form1', element: <Forms /> },
  { path: '/Task-Mrchams/form2', element: <Form2 /> },
  { path: '/Task-Mrchams/form3', element: <Form3 /> },
  { path: '/Task-Mrchams/form4', element: <Form4 /> },
  { path: '/Task-Mrchams/form5', element: <Forms5 /> },
  { path: '/Task-Mrchams/form6', element: <Forms6 /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
