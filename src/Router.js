import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {Contact} from "./pages/Contact";

export const Router = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage />
        },
        {
            path: 'contact',
            element: <Contact />,
        }
    ])

    return <RouterProvider router={routes} />
}