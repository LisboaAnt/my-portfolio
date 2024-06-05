import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import './style.scss'; // Importação do arquivo de estilos

function Me() {
    const { t } = useTranslation();

    return (
        <div className='Me'>
            <p>Olá mundo</p>
        </div>
    );
}

export default Me;
