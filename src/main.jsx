import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"

import Home from './Components/routes/home/home.jsx'
import App from './App.jsx'
import Create from './Components/routes/create/create.jsx'
import Post from './Components/routes/post/post.jsx'
import Auth from './Components/routes/auth/auth.jsx'
import Profile from './Components/routes/profile/profile.jsx'
import MainLayout from './Components/routes/layouts/mainLayout.jsx'
import Search from './Components/routes/search/search.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  element={<MainLayout/>} > 
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/add" element={<Post/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/profile" element={<Profile/>} />
    </Route>
      <Route path="/auth" element={<Auth/>} />

    </Routes>
   
    </BrowserRouter>
  </StrictMode>,
)
