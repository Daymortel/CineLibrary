import React from 'react'
import {  createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Result } from './pages/result'

const root = document.querySelector('#root')
const app = createRoot(root)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path=':id' element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}

app.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)