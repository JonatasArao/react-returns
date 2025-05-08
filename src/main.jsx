import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './pages/home'
import Counter from './pages/counter'

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Home
    },
    {
      path: "/counter",
      Component: Counter
    },
    {
      path: "*",
      Component: () => <div>404 not found</div>
    }
  ],
  {
    basename: import.meta.env.MODE === "production" ? "/react-returns" : "/"
  }
);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
