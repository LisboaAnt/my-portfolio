import React from 'react';
import './styles.scss';

interface LetreiroProps {
  text: string;
}

const Letreiro: React.FC<LetreiroProps> = ({ text }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">{text+`          `+text}</div>
    </div>
  );
};

export default Letreiro;
