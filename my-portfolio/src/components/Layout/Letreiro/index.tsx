import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

interface LetreiroProps {
  text: string;
}

const Letreiro: React.FC<LetreiroProps> = ({ text }) => {

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link className="marquee-container" to="/my-portfolio/contact" onClick={handleLogoClick} style={{ color: 'black', textDecoration: 'none', cursor: 'pointer' }}>
      <div className="marquee-content">{text + `          ` + text}</div>
    </Link>
  );
};

export default Letreiro;
