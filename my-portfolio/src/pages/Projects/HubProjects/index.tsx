import './style.scss'
import { useTranslation } from "react-i18next";
import ListCards from '../../../components/ListCardsProjects';

const HubProjects = () =>{
    const { t } = useTranslation();
    return(
        <div className="hubprojects mb-5 pb-5">     
            <div className="d-flex justify-content-center">
                <div className='containerProjects'>
                    <div className='row justify-content-md-center mt-4'>
                        <div className='text-center'>
                            <h1 className='mb-4'>{t("project.title")}</h1>
                            <div>
                                    <ListCards/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default HubProjects;