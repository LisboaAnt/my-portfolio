import React from 'react';
import { useTranslation } from "react-i18next";

const LanguageOptions = [
    {
        name: "Português",
        value: "ptbr",
        flag: "🇧🇷"
    },
    {
        name: "Español",
        value: "es",
        flag: "🇪🇸"
    },
    {
        name: "English",
        value: "en",
        flag: "🇺🇸"
    }
]

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language); // Salva o idioma selecionado no localStorage
    };

    return (
        <div>
            {LanguageOptions.map((language) => (
                <button
                    key={language.value}
                    onClick={() => changeLanguage(language.value)}
                >
                    {language.flag} {language.name}
                </button>
            ))}
        </div>
    );
}

export default LanguageSwitcher;
