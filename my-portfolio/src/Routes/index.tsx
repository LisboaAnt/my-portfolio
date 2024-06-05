import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App.tsx';
import NoPage from '../pages/NoPage/index.tsx';
import Home from '../pages/Home/index.tsx';
import Cursos from '../pages/Cursos/index.tsx';
import Project from '../pages/Projects/Project/index.tsx';
import HubProjects from '../pages/Projects/HubProjects/index.tsx';
import Contact from '../pages/Contact/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/cursos',
        element: <Cursos />,
      },
      {
        path: '/project/:id',
        element: <Project />,
      },
      {
        path: '/project',
        element: <HubProjects />,
      },
    ],
  },
]);

export default router;
