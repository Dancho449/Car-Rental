import React from "react"
import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Cars from "./Pages/Car/Cars"
import CarDetail from "./Pages/Car/CarDetail"
import HostLayout from "./Components/HostLayout"
import Dashboard from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"
import HostCars from "./Pages/Host/HostCars"
import HostCarsDetails from "./Pages/Host/HostCarsDetails"
import HostCarInfo from "./Pages/Host/HostCarInfo"
import HostCarPricing from "./Pages/Host/HostCarPricing"
import HostCarPhotos from "./Pages/Host/HostCarPhotos"
import NotFound from "./Components/NotFound"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:id" element={<CarDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="cars" element={<HostCars />} />
              <Route path="cars/:id" element={<HostCarsDetails />}>
                <Route index element={<HostCarInfo />} />
                <Route path="pricing" element={<HostCarPricing />} />
                <Route path="photos" element={<HostCarPhotos />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
