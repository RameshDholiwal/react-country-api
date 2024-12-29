import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import App from './App.tsx'
const CountryList = lazy(() => import('./Components/CountryList.tsx'))
const CountryDetails = lazy(() => import('./Components/CountryDetails.tsx'))
const About = lazy(() => import('./Components/About.tsx'))
const Home = lazy(() => import('./Components/Home.tsx'))

const router = createBrowserRouter([{
  path : "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Suspense fallback={"loading..."}><Home /></Suspense>
    },
    {
      path: "/About",
      element: <Suspense fallback={"loading..."}><About /></Suspense>
    },
    {
      path: "/Country",
      element: <Suspense fallback={"loading..."}><CountryList /></Suspense>
    },
    {
      path: "/:country",
      element: <Suspense fallback={"loading..."}><CountryDetails /></Suspense>
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
