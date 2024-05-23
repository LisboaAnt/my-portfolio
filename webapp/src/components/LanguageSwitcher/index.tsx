import { useState } from 'react';
import { useTranslation } from "react-i18next";
import './styles.scss';

import FlagBrazil from "/img/FlagBrazil.svg";
import FlagSpain from "/img/FlagSpain.svg";
import FlagUS from "/img/FlagUS.svg";

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
    const [hoveredLanguage, setHoveredLanguage] = useState(String);

    const changeLanguage = (language:any) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language); // Salva o idioma selecionado no localStorage
    };

    return (
        <div 
            className="language-switcher-container"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
        >
            <div className="language-switcher gradient-shadow-2">
                {LanguageOptions.map((language) => (
                    i18n.language === language.value &&
                    <span key={language.value} onClick={() => setShowOptions(!showOptions)} >
                        <img src={language.flag} alt={language.name} className="main-image" />
                    </span>
                ))}
            </div>
            <div className={`language-options ${showOptions ? 'show' : ''}`}>
                {LanguageOptions.map((language) => (
                    i18n.language !== language.value &&
                    <span
                        className="languageBox"
                        key={language.value}
                        onClick={() => { changeLanguage(language.value); setShowOptions(false); }}
                        onMouseEnter={() => setHoveredLanguage(language.name)}
                        onMouseLeave={() => setHoveredLanguage('')}
                    >
                        <img src={language.flag} alt={language.name} className="hover-image" />
                        {hoveredLanguage === language.name && (
                            <div className="language-name-tooltip ">
                                <span>{language.name}</span>
                            </div>
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
