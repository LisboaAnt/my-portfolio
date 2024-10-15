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
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/" className='blackH gradient-shadow-3'>Home</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/me" className='grayH'>{t("NavBar.DownMenu.about")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/contact" className='tealH'>{t("NavBar.DownMenu.contact")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/projects" className='greenH'>{t("NavBar.DownMenu.projects")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="/publications" className='yellowH'>{t("NavBar.DownMenu.publications")}</Link></li>
          <li className="list-inline-item redH"><Link onClick={handleLogoClick} to="https://www.youtube.com/@antoniolisboa3897/videos" target="_blank" className='redH'>{t("Youtube")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="https://www.linkedin.com/in/antonio-lisboa-de-carvalho-b5a5a4194/" target="_blank" className='blueH'>{t("Linkedin")}</Link></li>
          <li className="list-inline-item"><Link onClick={handleLogoClick} to="https://github.com/LisboaAnt" target="_blank" className='blackH'>{t("Github")}</Link></li>
        </ul>
      </div>
      <div className="Footer-section">
        <p><Link className='unico' to="/dados">&copy;</Link> {new Date().getFullYear()} {t("Footer.companyName")}. {t("Footer.rightsReserved")}</p>
      </div>
    </footer>
  );
});

export default Footer;
