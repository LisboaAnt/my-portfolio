import React from 'react';
import { useTranslation } from "react-i18next";
import './Footer.scss'; // Importação do arquivo CSS
import { Link } from 'react-router-dom';

const Footer = React.memo(() => {
  const { t } = useTranslation();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer bg-white text-center py-3">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/" className='blackH gradient-shadow-3'>{t("Inicio")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/me" className='grayH'>{t("Sobre")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/contact" className='tealH'>{t("Contato")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/projects" className='greenH'>{t("Projetos")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/blog" className='yellowH'>{t("Blog")}</Link></li>
          <li className="list-inline-item redH"><Link onClick={handleLogoClick} to="https://www.youtube.com/@antoniolisboa3897/videos" target="_blank" className='redH'>{t("Youtube")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="https://linkedin.com" target="_blank" className='blueH'>{t("Linkedin")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="https://github.com" target="_blank" className='blackH'>{t("Github")}</Link></li>
        </ul>
      </div>
      <div className="Footer-section">
        <p>&copy; {new Date().getFullYear()} {t("Footer.companyName")}. {t("Footer.rightsReserved")}</p>
      </div>
    </footer>
  );
});

export default Footer;
