import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Letreiro from "./Letreiro/index"
import DownMenu from "./DownMenu";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-lg-5 p-md-5 p-2">
 
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand tbk" href="#">
          AntLisboa.
        </a>

        <div className="flex-grow-1 d-flex justify-content-center 	d-none d-lg-block">
          <Letreiro text={t("NavBar.Letreiro")} />
        </div>

        <div className="d-flex">
          <LanguageSwitcher />
          <DownMenu />
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
