import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

interface ListCardPublicationsProps {
    title: string;
    description: string;
    index: number;
}

const ListCardPublications: React.FC<ListCardPublicationsProps> = ({ title, description, index }) => {

    // Verifica se algum campo está vazio
    const isEmptyField = title.trim() === '' || description.trim() === '';

    // Se algum campo estiver vazio, não renderizar o card
    if (isEmptyField) {return null;}

    return (
        <div className='publication'>
            <div className="card">

                <div className="image-container">
                    <Link to={`/projects/${1 + index}`} className="overlay">
                        <div className='button'>
                            <Link to={`/publications/${1 + index}`} className="btn btn-white btn-animate">Ver Detalhes</Link>
                        </div>
                    </Link>
                </div>

                <div className="card-body text-justify">
                    <h4 className="card-title text-center">{title}</h4>
                    <p className="card-subtitle mb-2 text-muted">{description}</p>
                    <p className="card-text text-truncate">{description}</p>
                </div>

            </div>
        </div>
    );
};

export default ListCardPublications;
