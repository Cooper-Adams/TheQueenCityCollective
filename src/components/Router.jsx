import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from '../pages/Admin'
import Articles from '../pages/Articles'
import ErrorPage from '../pages/ErrorPage'
import Register from '../pages/Register'
import Story from '../pages/Story'
import '../styles/GeneralStyles.css'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Articles />,
            errorElement: <ErrorPage />,
        },
        {
            path: ':teamname',
            element: <Articles />,
        },
        {
            path: ':teamname/:story',
            element: <Story />,
        },
        {
            path: 'register',
            element: <Register />,
        },
        {
            path: 'admin',
            element: <Admin />,
        }
    ])

    return ( <RouterProvider router={router} /> )
}

export default Router