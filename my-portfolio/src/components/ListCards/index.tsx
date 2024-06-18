/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CardProject from '../Card'; // Verifique o caminho correto do arquivo
import './style.scss';

import { useTranslation } from "react-i18next";

// Importe o JSON aqui
import json from '../Card/projectsa.json';

interface Props {
    maxCards?: number;
}

const ListCards: React.FC<Props> = ({ maxCards }) => {
    const { t } = useTranslation();

    // Obter os projetos, inverter a ordem e aplicar slice
    const reversedProjects = [...json.projects].reverse();
    const projects = reversedProjects.slice(0, maxCards);

    return (
        <div className='list-projects'>
            <div className="row">
                {projects.map((project: any, index: number) => {
                    const invertedIndex = json.projects.length - reversedProjects.indexOf(project) - 1;
                    return (
                        <div key={index} className="col-sm-6 col-md-4 d-flex justify-content-center">
                            <CardProject 
                                title={`${t(project.title)}`}
                                description={t(project.description)}
                                imageUrl={project.photo}
                                index={invertedIndex}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListCards;
