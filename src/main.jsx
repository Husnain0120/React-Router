import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Coponents/Home/Home.jsx'
import About from './Coponents/About/About.jsx'
import Contact from './Coponents/Contact/Contact.jsx'
import User from './Coponents/User/User.jsx'
import Github, { githubloder } from './Coponents/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contact us",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element = {<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact us' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
    <Route 
    loader={githubloder}
    path='github'
     element={<Github/>}
     />     
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
