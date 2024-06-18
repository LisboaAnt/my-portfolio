import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import ImageLoader from '../ImageLoader';

interface CardProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const CardProject: React.FC<CardProjectProps> = ({ title, description, imageUrl, index }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingImageUrl, setLoadingImageUrl] = useState('');

    useEffect(() => {
        setLoadingImageUrl(`/${imageUrl}`);
    }, [imageUrl]);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
    };

    // Verifica se algum campo está vazio
    const isEmptyField = title.trim() === '' || description.trim() === '' || imageUrl.trim() === '';

    // Se algum campo estiver vazio, não renderizar o card
    if (isEmptyField) {
        return null;
    }

    return (
        <div className='props'>
            <div className="card">
                <div className="image-container">
                    {isLoading && (
                        <div className="card-img-top cardimg">
                            <ImageLoader />
                        </div>
                    )}
                    <img 
                        src={loadingImageUrl} 
                        className="card-img-top" 
                        alt="Project" 
                        onLoad={handleImageLoad} 
                        onError={handleImageError} 
                        style={{ display: isLoading ? 'none' : 'block' }} 
                    />
                    <Link to={`/projects/${1 + index}`} className="overlay">
                        <div className='button'>
                            <Link to={`/projects/${1 + index}`} className="btn btn-white btn-animate">Ver Detalhes</Link>
                        </div>
                    </Link>
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
