import './styles.scss';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="no-page-container">
      <h1>404</h1>
      <p>Página não implementada</p>
      <Link to="/" className='btn gohome'> Voltar para Home</Link>
    </div>
  );
}

export default NoPage;
