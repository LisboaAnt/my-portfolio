import ReactDOM from 'react-dom/client'
import './index.scss'
import './i18n/index.ts'

//* Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

//* Arquivos de Rotas
import router from './Routes/index.tsx';

//* Rotas padrão react-router-dom
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}  />
)