import React from 'react';
import { useTranslation } from "react-i18next";
import './style.scss'; // Importação do arquivo de estilos

function Me() {
    const { t } = useTranslation();

    // Lista de tecnologias
    const technologies = [
        "REACT", "NEXT", "Bootstrap", "Jscript", "Tscript", "Python-Web",
        "C/C# - Algoritmos", "Java - Back", "Git-Github", "Oracle database",
        "Postgre SQL", "My SQL", "MongoDB", "SCRUM", "FIGMA"
    ];

    return (
        <div className='container'>
            <div className='row justify-content-md-center '>
                <div className='col-md-10 d-flex '>

                    <div className="left-column d-none d-lg-block">
                        <div className="photo">
                            <img src="/img/Lisboa/LisboaPerfil.png" alt="Foto Anntônio Lisboa" className="profile-photo" />
                        </div>

                        <div className='photo'>
                            <h3>{t("me.technologies")}</h3>
                            <div className='technologies-container '>
                                {technologies.map((tech, index) => (
                                    <span key={index} className={`technology ${tech}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
        
                    <div className='right-column'>

                        <div className='hi'>
                            <h1>{t("me.hi")}</h1>
                        </div>
                        <div className='about'>
                            <p className='about1'>{t("me.about")}</p>
                            <p className='about2'>{t("me.about2")}</p>
                        </div>
                        <div className='experience'>
                            <h2>{t("me.experience")}</h2>
                            <p>{t("me.experience2")}<br />
                                {t("me.experience2.1")}
                            </p>
                            <p>{t("me.experience3")}<br />
                                {t("me.experience3.1")}
                            </p>

                        </div>

                        <div className='photo d-lg-none'>
                            <h3>{t("me.technologies")}</h3>
                            <div className='technologies-container '>
                                {technologies.map((tech, index) => (
                                    <span key={index} className={`technology ${tech}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Me;
