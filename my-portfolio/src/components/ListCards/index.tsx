import React from 'react';
import CardProject from '../Card'; // Verifique o caminho correto do arquivo
import './style.scss';

import { useTranslation } from "react-i18next";

// Importe o JSON aqui
import json from '../Card/projectsa.json';
const ListCards: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className='list-projects'>
            <div className="row">
                {json.projects.map((project: any, index: number) => (
                    <div key={index} className=" col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                        <CardProject 
                            title={t(project.title)}
                            description={t(project.description)}
                            imageUrl={project.photo}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListCards;
