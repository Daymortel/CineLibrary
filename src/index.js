import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Favorites } from './pages/favorites'
import { Home } from './pages/home'
import { Result } from './pages/result'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'

const root = document.querySelector('#root')
const app = createRoot(root)

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path=':id' element={<Result />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )
}

app.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)