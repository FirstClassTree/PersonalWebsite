import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './styles/index.css';

import About from './about.jsx'
import Projects from './Projects.jsx'
import ErrorPage from './error-page.jsx'
import Draw from './Draw.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element:<App />,
    errorElement: <ErrorPage/>
  },
  {
    path:'Projects',
    element: <Projects/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "Draw",
    element:<Draw />,
    errorElement: <ErrorPage/>
  },

  {
    path:'About',
    element: <About/>,
    errorElement: <ErrorPage/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

  <style>@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);</style>


  <RouterProvider router={router}/>
  

  </React.StrictMode>,
)
