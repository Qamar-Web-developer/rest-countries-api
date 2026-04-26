import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./component/Home";
import Contact from './component/Contact'
import Error  from "./component/Error";  
import CountryDetail from "./component/CountryDetail";


const route = createBrowserRouter([
 
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[{
            path:'/',
            element:<Home/>
        },
        {
            path:'/Contact',
            element:<Contact/>
        },
        {
            path:'/:Country',
            element:<CountryDetail/>
        }
        ]
        }
])






const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={route} />)