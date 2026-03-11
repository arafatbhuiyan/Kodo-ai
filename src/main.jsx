import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Pricing from './Pages/Pricing/Pricing.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Docs from './Pages/Docs/Docs.jsx';
import Contact from './Pages/Contact/Contact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
      { path:"/pricing", Component:Pricing},
      { path:"/blog", Component:Blog},
      {path:"/docs", Component:Docs},
      {path:"/contact", Component:Contact}
    ]
  },
  {
    path:"/about",
    element: <div> This is my About page</div>
  },
  {
    path:"/blog",
    element: <div> This is my Blog page</div>
  },
   {
    path:"*",
    element: <div> 404- fine is not found</div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
