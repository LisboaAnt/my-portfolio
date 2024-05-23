import  { useState } from 'react';
import { useTranslation } from "react-i18next";
import './styles.scss'

import FlagBrazil from "../../../public/img/FlagBrazil.svg";
import FlagSpain from "../../../public/img/FlagSpain.svg";
import FlagUS from "../../../public/img/FlagUS.svg";

const LanguageOptions = [
    {
        name: "Português",
        value: "ptbr",
        flag: FlagBrazil
    },
    {
        name: "Español",
        value: "es",
        flag: FlagSpain
    },
    {
        name: "English",
        value: "en",
        flag: FlagUS
    }
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [showOptions, setShowOptions] = useState(false);

    const changeLanguage = (language: any) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language); // Salva o idioma selecionado no localStorage
    };

    return (
        <div 
            className="language-switcher-container"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
        >
            <div className="language-switcher">
                {LanguageOptions.map((language) => (
                    i18n.language === language.value &&
                    <span key={language.value} onClick={() => setShowOptions(!showOptions)}>
                        <img src={language.flag} alt={language.name} className="main-image" />
                    </span>
                ))}
            </div>
            <div className={`language-options ${showOptions ? 'show' : ''}`}>
                {LanguageOptions.map((language) => (
                    i18n.language !== language.value &&
                    <span className="languageBox" key={language.value} onClick={() => { changeLanguage(language.value); setShowOptions(false); }}>
                        <img src={language.flag} alt={language.name} className="hover-image" />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
