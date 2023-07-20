import { createBrowserRouter} from "react-router-dom";
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

// import { createBrowserRouter, Route, Routes } from "react-router-dom";

// import Layout from "./pages/layout";
// import HomePage from "./pages/HomePage";
// import GameDetailPage from "./pages/GameDetailPage";
// import ErrorPage from "./pages/ErrorPage";
// import Cart from "./pages/Cart";

// const router = createBrowserRouter(
//     <Routes>   
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />}/>   
//         <Route path="games/:slug" element={<GameDetailPage />} />     
//         <Route path="add to library" element={<Cart />} />
//         <Route 
//           path="*" 
//           element={<ErrorPage />}
//         />      
//       </Route>    
//     </Routes>
//   )

// export default router;
// import { RouteObject } from 'react-router-dom';

// import Layout from './pages/layout';
// import HomePage from './pages/HomePage';
// import GameDetailPage from './pages/GameDetailPage';
// import ErrorPage from './pages/ErrorPage';
// import Cart from './pages/Cart';

// const routes: RouteObject[] = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: 'games/:slug', element: <GameDetailPage /> },
//       { path: 'add to library', element: <Cart /> },
//       { path: '*', element: <ErrorPage /> },
//     ],
//   },
// ];

// export default routes;