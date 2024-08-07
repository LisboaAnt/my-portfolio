import { createBrowserRouter } from 'react-router-dom';
import App from '../App.tsx';
import NotFound from '../pages/NotFound';

import Home from '../pages/Home/index.tsx';

import Me from '../pages/Me/index.tsx';
import Cursos from '../pages/Cursos/index.tsx';
import Project from '../pages/Projects/Project/index.tsx';
import HubProjects from '../pages/Projects/HubProjects/index.tsx';
import Contact from '../pages/Contact/index.tsx';
import Publicdoc from '../pages/Publicdoc/index.tsx';
import Publications from '../pages/Publications/HubPublications/index.tsx';
import Publication from '../pages/Publications/Publication/index.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'me',
        element: <Me/>
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'cursos',
        element: <Cursos />,
      },
      {
        path: 'dados',
        element: <Publicdoc/>,
      },
      {
        path: 'projects',
        element: <HubProjects />,
      },
      {
        path: 'projects/:id',
        element: <Project />,
      },      
      {
        path: 'publications',
        element: <Publications/>,
      },
      {
        path: 'publications/:id',
        element: <Publication/>,
      },
    ],
  },
]);

export default router;
