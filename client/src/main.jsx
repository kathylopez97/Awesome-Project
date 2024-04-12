import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
//
//uncomment the areas when those pages are ready
//

import App from './App.jsx'
// import FavoriteVehicles from './pages/FavoritedVehicles'
// import GetSingleVehicle from './pages/GetSingleVehicle'
import Homepage from './components/HomePage/index.jsx'
// import Search from './pages/Search'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1 className='display-2'>Wrong Page!</h1>,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            //  {
            //     path: '/search',
            //     element: <Search/>
            // }, 
            
            // {
            //     path: '/favorites',
            //     element: <FavoriteVehicles/>
            // }, {
            //     path: '/vehicle/:id',
            //     element: <GetSingleVehicle/>
            // }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )