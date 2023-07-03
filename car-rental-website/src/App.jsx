import React from "react"
import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Cars from "./Pages/Car/Cars"
import CarDetail from "./Pages/Car/CarDetail"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
