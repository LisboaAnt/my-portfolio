import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Importar Bootstrap Icons
import './styles.scss';

const NavMenu: React.FC = () => {
  const { t } = useTranslation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-menu" ref={menuRef}>
      <button onClick={toggleMenu} className="nav-menu-btn">
        <span className={menuIsOpen ? 'menu-close' : 'menu-open'}>
          <h1>{menuIsOpen ? t("NavBar.DownMenu.open") : t("NavBar.DownMenu.close")}</h1>
          <i className={menuIsOpen ? 'bi bi-x-lg ps-2' : 'bi bi-list ps-2'}></i>
        </span>
      </button>
      {menuIsOpen && (
        <div className="background-linear-gradient gradient-shadow text-center menuIsOpen">
          <ul className="nav-menu-content ">
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/about"><i className="bi bi-info-circle"></i>{t("NavBar.DownMenu.about")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/contact"><i className="bi bi-envelope"></i>{t("NavBar.DownMenu.contact")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item ">
              <Link to="/work" ><i className="bi bi-journal-code green"></i><div className='greenH'>Projects</div></Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/blog"><i className="bi bi-journal"></i>Blog</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <a href="https://www.linkedin.com/in/victor-martins-t/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i>Linkedin</a>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <a href="https://github.com/Tranivic" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i>Github</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
