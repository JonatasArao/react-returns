import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './pages/home.jsx'
import Counter from './pages/counter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/counter",
    Component: Counter
  }
]);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
