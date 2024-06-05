import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

interface LetreiroProps {
  text: string;
}

const Letreiro: React.FC<LetreiroProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    const currentPath = window.location.pathname;
    const targetPath = '/contact';

    if (currentPath !== targetPath) {
      navigate('/contact');
    }
  };

  return (
    <div className="marquee-container" onClick={handleRedirect} style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>
      <div className="marquee-content">{text + `          ` + text}</div>
    </div>
  );
};

export default Letreiro;
