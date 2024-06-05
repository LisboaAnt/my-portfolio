import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import './style.scss'; // Importação do arquivo de estilos

function Home() {
    const { t } = useTranslation();

    return (
        <div className='Home'>
            <div className='container-fluid'>
                <div className='row justify-content-center mt-4 vh-100 px-4'>
                    <div className='col-md-8 text-center'>
                        <h2 className="title">{t("home.title")} <span className='lisboa'>Lisboa</span></h2>
                        <h1 className="description">{t("home.description")}</h1>
                        <h4 className='description2'>{t("home.description2")}</h4>

                        <div className="text-box mt-3 pt-3">
                            <Link to="/contact" className="btn btn-white btn-animate gradient-shadow-2 mt-5"> 
                                Me contrate!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
