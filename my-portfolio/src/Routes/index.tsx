import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import NoPage from '../pages/NoPage/index.tsx';

import Home from '../pages/Home/index.tsx';

import Me from '../pages/Me/index.tsx';
import Cursos from '../pages/Cursos/index.tsx';
import Project from '../pages/Projects/Project/index.tsx';
import HubProjects from '../pages/Projects/HubProjects/index.tsx';
import Contact from '../pages/Contact/index.tsx';
import Publicdoc from '../pages/Publicdoc/index.tsx';


const router = createBrowserRouter([
  {
    path: '/my-portfolio/',
    element: <App />,
    errorElement: <NoPage />,
    children: [
      {
        path: '/my-portfolio/',
        element: <Home/>,
      },
      {
        path: '/my-portfolio/me',
        element: <Me/>
      },
      {
        path: '/my-portfolio/contact',
        element: <Contact/>,
      },
      {
        path: '/my-portfolio/cursos',
        element: <Cursos />,
      },
      {
        path: '/my-portfolio/blog',
        element: <Publicdoc/>,
      },
      {
        path: '/my-portfolio/projects',
        element: <HubProjects />,
      },
      {
        path: '/my-portfolio/projects/:id',
        element: <Project />,
      },
    ],
  },
]);

export default router;
