/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './style.scss';

import { useTranslation } from "react-i18next";

// Importe o JSON aqui
import json from '../CardPublications/publicacoes.json';

import CardPublication from '../CardPublications'

interface ListCardPublicationsProps {
    maxCards?: number;
}

const ListCardPublications: React.FC<ListCardPublicationsProps> = ({ maxCards }) => {
    const { t } = useTranslation();

    // Obter os projetos, inverter a ordem e aplicar slice
    const reversedProjects = [...json.projects].reverse();
    const projects = reversedProjects.slice(0, maxCards);

    return (
        <div className='list-publication flex-column'>
            <div className="row justify-content-center">
                {projects.map((project: any, index: number) => {
                    const invertedIndex = json.projects.length - reversedProjects.indexOf(project) - 1;
                    return (
                        <div key={index} className="col-sm-8 col-md-4 cards cardpubli">
                            <CardPublication 
                                title={`${t(project.title)}`}
                                description={t(project.description)}
                                text={t(project.text)}
                                index={invertedIndex}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListCardPublications;
