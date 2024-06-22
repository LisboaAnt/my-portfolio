import React from 'react';
import './style.scss';
import { useTranslation } from "react-i18next";
import ListCardPublications from '../../../components/ListCardsPublications';

const Publications: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className="publications d-flex justify-content-center">
      <div className='containerPublication'>
            <div className='text-center'>
                <h1 className='mb-4 titulo'>{t("publication.title")}</h1>
                <div className='publicationss'>
                  <ListCardPublications/>
                </div>
              </div>
      </div>
  </div>
  );
};

export default Publications;
