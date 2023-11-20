import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {logo} from './assets'
import {Home, CreatePost} from './pages'

function App() {
  return (
   <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-black/80 sm:px-8 px-4 py-4 border-b border-b-[#313131]">
    <Link to="/" className="flex items-center">
      <img src={logo} alt="logo" className="w-14 object-contain"/>
        <p className='text-3xl font-bold text-white ml-2'>DreamCanvas</p>
    </Link>
    <Link to="/create-post" className="font-inter font-medium bg-gradient-to-r from-purple-400 to-yellow-400 text-black px-4 py-2 mr-5 rounded-md">
      Create
    </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#1e1f1f] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
   </BrowserRouter>
  )
}

export default App
