import React from 'react'
import {BrowserRouter,useRoutes} from 'react-router-dom'
import Home from './pages/home'
import Articles from './pages/Articles'

const AppRoutes = ()=>{
  const routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/articles',element:<Articles/>}
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