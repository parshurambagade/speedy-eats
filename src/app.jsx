import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Restaurant from './components/Restaurant';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import Cart from './components/Cart';



const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
    
    return (
        <Provider store={appStore}>
        <div>
            <Header />
            <Outlet />
        </div>
        </Provider>
    );
};

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <Restaurant />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
    
])

root.render(<RouterProvider router={appRoute} />);