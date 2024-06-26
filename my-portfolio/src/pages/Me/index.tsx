import { useTranslation } from "react-i18next";
import { useState } from 'react';
import './style.scss'; // Importação do arquivo de estilos
import ImageLoader from '../../components/ImageLoader';

function Me() {
    const { t } = useTranslation();

    const [imageUrl] = useState('/img/Lisboa/LisboaPerfil.png');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
    };
  
    // Lista de tecnologias
    const technologies = [
        "REACT", "NEXT", "Bootstrap", "Jscript", "Tscript", "Python-Web",
        "C/C# - Algoritmos", "Java - Back", "Git-Github", "Oracle database",
        "Postgre SQL", "My SQL", "MongoDB", "SCRUM", "FIGMA"
    ];

    return (
        <div className='me'>
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-10 d-flex '>

                        <div className="left-column d-none d-lg-block">
                            <div className="photo">
                                <div >
                                {isLoading ? (
                                    <div className="profile-photo">
                                    <ImageLoader />
                                    </div>
                                ) : (
                                    <div className="photoContainer">
                        
                                        <img src={imageUrl} 
                                        className="profile-photo" 
                                        alt="Foto Anntônio Lisboa" 
                                        onLoad={handleImageLoad} 
                                        onError={handleImageError} 
                                        style={{ display: isLoading ? 'none' : 'block' }} 
                                        />
                                    </div>
                                )}
                                </div>
                            </div>

                            <div className='photo'>
                                <h3 className="text-center">{t("me.technologies")}</h3>
                                <div className='technologies-container '>
                                    {technologies.map((tech, index) => (
                                        <span key={index} className={`technology ${tech.toLowerCase()}`}>{tech}</span>
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
                            <div className='d-flex flex-wrap justify-content-between '>
                                <div className='experience'>
                                    <h2>{t("me.experience")}</h2>
                                    <p>{t("me.experience2")}<br />
                                        {t("me.experience2.1")}
                                    </p>
                                    <p>{t("me.experience3")}<br />
                                        {t("me.experience3.1")}
                                    </p>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="card-title">{t("me.curriculum")}</h1>
                                        <h2 className="card-subtitle mb-2 text-muted">{t("me.curriculum1")}</h2>
                                        <div className="d-flex justify-content-center ">
                                            <a href="/storage/Antonio_Lisboa_Full_Stack.pdf" download="Antonio_Lisboa_Full_Stack.pdf" className="btn btn-white btn-animate mb-1"> 
                                                Dowload <i className="bi bi-download ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='photo d-lg-none'>
                                <h3>{t("me.technologies")}</h3>
                                <div className='technologies-container '>
                                    {technologies.map((tech, index) => (
                                        <span key={index} className={`technology ${tech.toLowerCase()}`}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Me;
