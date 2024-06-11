import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import './style.scss'; // Importação do arquivo de estilos
import ListCards from "../../components/ListCards";

function Home() {
    const { t } = useTranslation();

    return (
        <div className='Home'>
            <div className='container-fluid'>
                <div className='row justify-content-center mt-4 px-4'>
                    <div className='col-md-12 text-center '>
                        <h2 className="title">{t("home.title")} <span className='lisboa'>Lisboa</span></h2>
                        <h1 className="description">{t("home.description")}</h1>
                        <h4 className='description2'>{t("home.description2")}</h4>

                        <div className="text-box mt-3 mb-5 pt-3 sombra">
                            <Link to="/my-portfolio/contact" className="btn btn-white btn-animate gradient-shadow-2 mt-5"> 
                                {t("home.button")}
                            </Link>
                        </div>

                        <div className="HomeProjects pt-5">
                            <h1 className=' mt-5'>{t("project.title")}</h1>
                            <div className='row justify-content-md-center mt-4 text-center mb-5'>
                                <ListCards maxCards={3}/>
                                <div className="irpara">
                                    <Link to="/my-portfolio/projects" className="btn btn-white btn-animate mt-2">Veja mais</Link>
                                </div>
                            </div>
                        </div>

                        <div className='row justify-content-center py-5 my-5'>
                            <div className='col-12 d-flex flex-wrap justify-content-around align-items-start sobreMimCurriculo'>
                                
                                <div className='col-md-7 col-8 aboutme mb-5 pb-2 '>
                                    <div className="link-container">
                                        <Link to={"/my-portfolio/me"} className="py-2 link-unstyled">
                                            <h1>{t("home.aboutme")}</h1>
                                        </Link>
                                    </div>
                                    <p>{t("home.aboutme1")}</p>
                                </div>

                                <div className="col-md-4 col-8 card mb-3">
                                    <div className="card-body">
                                        <h1 className="card-title">{t("me.curriculum")}</h1>
                                        <h2 className="card-subtitle mb-2 text-muted">{t("me.curriculum1")}</h2>
                                        <div className="d-flex justify-content-center">
                                            <a href="/my-portfolio/storage/Antonio_Lisboa_Full_Stack.pdf" download="Antonio_Lisboa_Full_Stack.pdf" className="btn btn-white btn-animate mb-1"> 
                                                Download <i className="bi bi-download ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
