import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CountryList from './Components/CountryList.tsx'
import CountryDetails from './Components/CountryDetails.tsx'
import About from './Components/About.tsx'
import Home from './Components/Home.tsx'

const router = createBrowserRouter([{
  path : "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/About",
      element: <About />
    },
    {
      path: "/Country",
      element: <CountryList />
    },
    {
      path: "/:country",
      element: <CountryDetails />
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
