import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './style.scss'

const Project = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const technologies = t("projects.project" + id + ".technologies", { returnObjects: true });
    const youtubeLink = t("projects.project" + id + ".youtube");

    function isYouTubeLink(url:any) {
        const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/playlist\?list=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
        return youtubePattern.test(url);
    }

    console.log("YouTube Link:", youtubeLink);
    console.log("Is YouTube Link:", isYouTubeLink(youtubeLink));

    return(
        <div className="project"> 
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 text-center'>
                        <div className="left-column">
                            <h1>{t("projects.project" + id + ".title")}</h1>
                            <h2>{t("projects.project" + id +".description")}</h2>
                            <p>{t("projects.project" + id +".text")}</p>
                        
                            {isYouTubeLink(youtubeLink) && 
                                <div className="youtube mt-5">
                                    <iframe
                                        src={youtubeLink}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="YouTube Playlist"
                                    ></iframe>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='col-lg-4 text-center'>

                        <div className='right-column'>

                            <div className="imgproject d-none d-lg-block">
                                <img src={t("projects.project" + id +".photo")} className="card-img-top" alt="Project" />
                            </div>

                            <div className="linkproject d-flex justify-content-center">
                                <a href={t("projects.project" + id + ".link")} className="SectionLink btn btn-animate mt-1" target="_blank">
                                    {t("projects.project" + id + ".link")}<br/>{t("project.click")}
                                </a>
                            </div>


                        <div className="SectionTecnologias">
                            <h3>{t("project.technologies")}</h3>
                            <div className='technologies-container '>
                                {Array.isArray(technologies) && technologies.map((tech, index) => (
                                    
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
};

export default Project;
