import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddBurger from './components/AddBurger.jsx'
import UpdateBurger from './components/UpdateBurger.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Users from './components/Users.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader : () => fetch('http://localhost:3000/burger')
  },
  {
    path: '/addburger',
    element: <AddBurger/>
  },
  {
    path: '/updateburger/:id',
    element: <UpdateBurger/>,
    loader: ({params})=>fetch(`http://localhost:3000/burger/${params.id}`)
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  },
  {
    path: '/sign-up',
    element: <SignUp/>
  },
  {
    path: '/users',
    element: <Users/>,
    loader: ()=> fetch('http://localhost:3000/users')
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
)
