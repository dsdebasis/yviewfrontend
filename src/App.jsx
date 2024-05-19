import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
function App() {

  return (
    <ContextProvider>

      <RouterProvider router={Routes} />
    </ContextProvider>

  )
}

export default App
