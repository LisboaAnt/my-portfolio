import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavBar = () => {
    
  const { t } = useTranslation();

  return (
    <nav className="Nav-bar">
        <nav>
            <p>{t("home.title")}</p>
            <LanguageSwitcher />
        </nav>
        <div>
            <Link to="/"> Home </Link>
            <Link to="/contact"> contact </Link>
            <Link to="/Project"> project </Link>
            <Link to="/"> Home </Link>
        </div>
    </nav>
  )
};

export default NavBar;
