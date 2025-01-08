import React from 'react'
import {BrowserRouter,useRoutes} from 'react-router-dom'
import Home from './pages/home'
import Articles from './pages/Articles'
import About from './pages/About'

const AppRoutes = ()=>{
  const routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/articles',element:<Articles/>},
    {path:'/about',element:<About/>}
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