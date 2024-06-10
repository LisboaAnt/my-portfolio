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
                    <div className='col-md-12 text-center'>
                        <h2 className="title">{t("home.title")} <span className='lisboa'>Lisboa</span></h2>
                        <h1 className="description">{t("home.description")}</h1>
                        <h4 className='description2'>{t("home.description2")}</h4>

                        <div className="text-box mt-3 mb-5 pt-3 sombra">
                            <Link to="/my-portfolio/contact" className="btn btn-white btn-animate gradient-shadow-2 mt-5"> 
                                {t("home.button")}
                            </Link>
                        </div>


                        
                        <div className="HomeProjects pt-5">
                            <h2 className=' mt-5'>{t("project.title")}</h2>
                            <div className='row justify-content-md-center mt-4 text-center mb-5'>
                                    <ListCards maxCards={3}/>

                                    <div className="irpara">
                                        <Link to="/my-portfolio/projects" className="btn btn-white gradient-shadow-2 btn-animate">Veja mais</Link>
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
