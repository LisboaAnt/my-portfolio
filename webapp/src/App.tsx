import React, { useEffect } from 'react';

import { useTranslation } from "react-i18next";

import { Outlet } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {    // Verifica se há um idioma armazenado no localStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {i18n.changeLanguage(storedLanguage);}
  }, [i18n]);

  return (
    <div className='App'>
      <Layout/>
      <Outlet/>

    </div>
  );
}

export default App;
