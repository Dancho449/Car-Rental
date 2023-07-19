import React from "react"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Cars, { loader as carLoader } from "./Pages/Car/Cars"
import CarDetail, { loader as carDetailLoader } from "./Pages/Car/CarDetail"
import HostLayout from "./Components/HostLayout"
import Dashboard, { loader as dashboardLoader } from "./Pages/Host/Dashboard"
import Income from "./Pages/Host/Income"
import Reviews from "./Pages/Host/Reviews"
import HostCars, { loader as hostCarsLoader } from "./Pages/Host/HostCars"
import HostCarsDetails, { loader as hostCarsDetailsLoader } from "./Pages/Host/HostCarsDetails"
import HostCarInfo from "./Pages/Host/HostCarInfo"
import HostCarPricing from "./Pages/Host/HostCarPricing"
import HostCarPhotos from "./Pages/Host/HostCarPhotos"
import NotFound from "./Components/NotFound"
import Error from "./Pages/Error"
import Login, { loader as loginLoader } from "./Pages/Login"
import { requireAuth } from "./utils.js"

import "./server"



const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="login"
            element={<Login />}
            loader={loginLoader}
            //action={loginAction}
          />
          <Route 
            path="cars" 
            element={<Cars />} 
            loader={carLoader} 
            errorElement={<Error />} 
          />
          <Route 
            path="cars/:id" 
            element={<CarDetail />} 
            loader={carDetailLoader} 
            errorElement={<Error />} 
          />

          <Route path="host" element={<HostLayout />}>
            <Route 
              index 
              element={<Dashboard />} 
              loader={dashboardLoader}
            />

            <Route 
              path="income" 
              element={<Income />} 
              loader={async () => await requireAuth()}
            />

            <Route 
              path="reviews" 
              element={<Reviews />} 
              loader={async () => await requireAuth()}
           />

            <Route 
              path="cars" 
              element={<HostCars />} 
              loader={hostCarsLoader} 
              errorElement={<Error />} 
            />
            <Route 
              path="cars/:id" 
              element={<HostCarsDetails />} 
              loader={hostCarsDetailsLoader} 
              errorElement={<Error />} 
            >
              <Route 
                index 
                element={<HostCarInfo />} 
                loader={async () => await requireAuth()}
              />
              <Route 
                path="pricing" 
                element={<HostCarPricing />} 
                loader={ async () => await requireAuth()}
              />
              <Route 
                path="photos" 
                element={<HostCarPhotos />} 
                loader={async () => await requireAuth()}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
))
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
