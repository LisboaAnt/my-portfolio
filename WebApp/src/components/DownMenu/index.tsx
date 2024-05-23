import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; // Exemplo de importação para usar com react-router-dom, ajuste conforme necessário
import './styles.scss'; // Importe estilos conforme necessário

const NavMenu: React.FC = () => {
  const { t } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="nav-menu">
      <button onClick={toggleMenu} className="nav-menu-btn">
        <span className={menuIsOpen ? 'menu-close' : 'menu-open'}>
          <h1>{menuIsOpen ? t("NavBar.DownMenu.open") : t("NavBar.DownMenu.close")}</h1>
          <i className={menuIsOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </span>
      </button>
      {menuIsOpen && (
        <div className="backgroud-linear-gradient">
          <ul className="nav-menu-content">
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/about">{t("NavBar.DownMenu.about")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/contact">{t("NavBar.DownMenu.contact")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/work">work</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <a href="https://www.linkedin.com/in/victor-martins-t/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <a href="https://github.com/Tranivic" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
