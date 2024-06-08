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

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
        <div className="background-linear-gradient text-center menuIsOpen gradient-shadow">
          <ul className="nav-menu-content">
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/my-portfolio/me" onClick={handleLogoClick}><i className="bi bi-info-circle"></i>{t("NavBar.DownMenu.about")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/my-portfolio/contact" onClick={handleLogoClick}><i className="bi bi-envelope gray"></i>{t("NavBar.DownMenu.contact")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item ">
              <Link to="/my-portfolio/projects" onClick={handleLogoClick}><i className="bi bi-journal-code green"></i>{t("NavBar.DownMenu.projects")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/my-portfolio/courses" onClick={handleLogoClick}><i className="bi bi-youtube red"></i>{t("NavBar.DownMenu.courses")}</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <Link to="/my-portfolio/blog" onClick={handleLogoClick}><i className="bi bi-journal purple"></i>Blog</Link>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <a href="https://www.linkedin.com/in/antonio-lisboa-de-carvalho-b5a5a4194/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin blue"></i>Linkedin</a>
            </li>
            <li onClick={toggleMenu} className="nav-menu-content-item">
              <a href="https://github.com/LisboaAnt" target="_blank" rel="noopener noreferrer"><i className="bi bi-github black"></i>Github</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
