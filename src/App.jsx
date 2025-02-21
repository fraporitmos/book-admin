import React from 'react'
import Sidebar from './components/Sidebar'
import { AdminRoutes } from './routes/AdminRoutes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return <RouterProvider router={AdminRoutes} />
}

export default App