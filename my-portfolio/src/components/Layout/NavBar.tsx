import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Letreiro from "../Letreiro/index"
import DownMenu from "../DownMenu";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: "30px" }}>
      <div className="container">
        <a className="navbar-brand" href="#">
          Antônio Lisboa
        </a>

        <Letreiro text={t("NavBar.Letreiro")} />
        <div>
          
        </div>

        <LanguageSwitcher />

        <DownMenu/>
      </div>
    </nav>
  );
};

export default NavBar;