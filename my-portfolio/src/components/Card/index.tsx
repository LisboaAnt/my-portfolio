import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ImageLoader from '../ImageLoader';

interface CardProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    index: number;
}

const CardProject: React.FC<CardProjectProps> = ({ title, description, imageUrl, index }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [LoadingimageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // Simule o carregamento da imagem após 2 segundos
        setTimeout(() => {
          setImageUrl("/my-portfolio/"+imageUrl); // Defina a URL da imagem real
          setIsLoading(false);
        }, 1);
      }, []);
  
      
    return (
        <div className='props'>
            <div className="card">
                <div className="image-container">
                            <div >
                                {isLoading ? (
                                    <div className="card-img-top cardimg">
                                    <ImageLoader />
                                    </div>
                                ) : (
                                    <img src={LoadingimageUrl} className="card-img-top" alt="Project" />
                                )}
                            </div>
                    <div className="overlay">
                        <Link to={"/my-portfolio/projects/"+( 1+ index) } className="btn btn-white btn-animate">Ver Detalhes</Link>
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
