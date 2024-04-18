import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import ResultsSelection from './components/ResultSelection'
import ResultsPage from './components/ResultsPage'

import App from './App.jsx'
// import FavoriteVehicles from './pages/FavoritedVehicles'
// import GetSingleVehicle from './pages/GetSingleVehicle'
// import Search from './pages/Search'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong Page!</h1>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/results',
                element: <ResultsPage/>
            },
            {
                path: '/favorites',
                element: <Outlet />
            },
            {
                path: '/vehicle/:id',
                element: <Outlet />   
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)