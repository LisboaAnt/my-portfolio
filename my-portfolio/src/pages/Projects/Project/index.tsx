import React from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';
import './style.scss';

const Project = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const technologies = t("projects.project" + id + ".technologies", { returnObjects: true });
    const youtubeLink = t("projects.project" + id + ".youtube");

    function isYouTubeLink(url:any) {
        const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
        return youtubePattern.test(url);
    }

    function extractYouTubeVideoId(url:any) {
        const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
    }

    const videoId = extractYouTubeVideoId(youtubeLink);

    return (
        <div className="project"> 
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 text-center'>
                        <div className="left-column">
                            <h1>{t("projects.project" + id + ".title")}</h1>
                            <div className="left-c">
                                <h2>{t("projects.project" + id +".description")}</h2>
                                <p>{t("projects.project" + id +".text")}</p>
                            </div>

                            {isYouTubeLink(youtubeLink) && videoId && 
                                <div className="youtube mt-5">
                                    <YouTube videoId={videoId} />
                                </div>
                            }
                        </div>
                    </div>

                    <div className='col-lg-4 text-center'>
                        <div className='right-column justify-content-center'>
                            <div className="py-3 px-4">
                                <div className="imgproject d-none d-lg-block">
                                    <img src={t("projects.project" + id +".photo")} className="card-img-top" alt="Project img" />
                                </div>
                            </div>

                            <div className="linkproject d-flex justify-content-center">
                                <a href={t("projects.project" + id + ".link")} className="SectionLink btn btn-animate mt-1" target="_blank" rel="noopener noreferrer">
                                    <h5>{t("project.click")}</h5>
                                    <span>{t("projects.project" + id + ".link")}</span>
                                </a>
                            </div>

                            <div className="Sectionstatus pb-4">
                                <h3>Status: <span>{t("projects.project" + id +".status")}</span></h3>
                            </div>

                            <div className="SectionTecnologias pb-4">
                                <h3>{t("project.technologies")}</h3>
                                <div className='technologies-container'>
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
