import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/Routes.jsx'
import ChannelContextProvider from './Context/ContextProvider.jsx'
function App() {

  return (
    <ChannelContextProvider>

      <RouterProvider router={Routes} />
    </ChannelContextProvider>

  )
}

export default App
