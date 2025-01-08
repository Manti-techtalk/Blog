import React from 'react'
import {BrowserRouter,useRoutes} from 'react-router-dom'
import Home from './pages/home'

const AppRoutes = ()=>{
  const routes = useRoutes([
    {path:'/',element:<Home/>}
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App