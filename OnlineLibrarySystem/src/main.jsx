import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import AddBook from './components/AddBook.jsx'
import BookDetails from './components/BookDetails.jsx'
import NotFound from './components/NotFound.jsx'


const appRoute = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,

      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/browse",
          element:<BrowseBooks/>
        },
        {
          path:"/books/:category",
          element:<BrowseBooks/>
        },
        {
          path:"/add",
          element:<AddBook/>
        },
        {
          path:"/book-details/:title",
          element:<BookDetails/>
        }
      ],

      errorElement:<NotFound/>
    }
   
  ]
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRoute}/>
  </StrictMode>,
)
