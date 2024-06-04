import React from 'react';
import { useTranslation } from "react-i18next";
import './Footer.scss'; // Importação do arquivo CSS

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-white text-center py-3">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/" className='blackH gradient-shadow-3'>{t("Inicio")}</a></li>
          <li className="list-inline-item"><a href="/about" className='grayH'>{t("Sobre")}</a></li>
          <li className="list-inline-item"><a href="/contact" className='tealH'>{t("Contato")}</a></li>
          <li className="list-inline-item"><a href="/projects" className='greenH'>{t("Projetos")}</a></li>
          <li className="list-inline-item"><a href="/blog" className='yellowH'>{t("Blog")}</a></li>
          <li className="list-inline-item"><a href="https://linkedin.com" target="_blank" className='blueH'>{t("Linkedin")}</a></li>
          <li className="list-inline-item"><a href="https://github.com" target="_blank" className='blackH'>{t("Github")}</a></li>
          <li className="list-inline-item redH"><a href="https://www.youtube.com/@antoniolisboa3897/videos" target="_blank" className='redH'>{t("Youtube")}</a></li>
        </ul>
      </div>
      <div className="Footer-section">
        <p>&copy; {new Date().getFullYear()} {t("Footer.companyName")}. {t("Footer.rightsReserved")}</p>
      </div>
    </footer>
  );
};

export default Footer;
