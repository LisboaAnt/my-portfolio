import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

interface CardProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const CardProject: React.FC<CardProjectProps> = ({ title, description, imageUrl, index }) => {
    return (
        <div className='props'>
            <div className="card">
                <div className="image-container">
                    <img src={imageUrl} className="card-img-top" alt="Project" />
                    <div className="overlay">
                        <Link to={index + 1 +""} className="btn btn-white btn-animate">Ver Detalhes</Link>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
