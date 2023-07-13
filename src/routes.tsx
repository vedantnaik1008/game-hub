import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
             index: true,
             element: <HomePage />
            },
            {path: 'games/:slug',
            element: <GameDetailPage /> 
            },
            {
             path: 'add to library',
             element: <Cart />
            },
        ]
    }
])

export default router;