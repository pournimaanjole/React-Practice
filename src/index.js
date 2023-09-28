import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import Component from './views/Component/Component';
import Props from './views/Props/Props';
import About from './views/About/About';
import Tasktodolist from './views/Tasktodolist/Tasktodolist';
import Usestate from './views/Usestate/Usestate';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/component",
    element: <Component/>,
  },
  {
    path: "/props",
    element: <Props/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/task",
    element: <Tasktodolist/>,
  },
  {
    path:"/usestate",
    element:<Usestate/>,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
 <RouterProvider router={router} />
 </>
);

