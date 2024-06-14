import React from 'react';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Letreiro from "./Letreiro/index"
import DownMenu from "./DownMenu";
import { Link } from 'react-router-dom';

const NavBar = React.memo(() => {

  const { t } = useTranslation();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-lg-5 p-md-5 p-2">
 
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand tbk" to="/" onClick={handleLogoClick}>
          AntLisboa.
        </Link>

        <div className="flex-grow-1 d-flex justify-content-center 	d-none d-lg-block">
          <Letreiro text={t("NavBar.Letreiro")}/>
        </div>

        <div className="d-flex">
          <LanguageSwitcher />
          <DownMenu />
        </div>
      </div>

    </nav>
  );
});

export default NavBar;
