import './style.scss'
import { useTranslation } from "react-i18next";
import ListCards from '../../../components/ListCards';

const HubProjects = () =>{
    const { t } = useTranslation();
    return(
        <div className="hubprojects mb-5">     
            <div className="d-flex justify-content-center">
                <div className='containerProjects'>
                    <div className='row justify-content-md-center mt-5'>
                        <div className='text-center'>
                            <h1>{t("project.title")}</h1>
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