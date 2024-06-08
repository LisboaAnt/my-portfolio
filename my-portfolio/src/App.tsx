import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';

import './App.scss';

import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './ts/ScrollTop';
import VisitorLogger from './components/VisitorLogger/VisitorLogger';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {    // Verifica se há um idioma armazenado no localStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {i18n.changeLanguage(storedLanguage);}
  }, [i18n]);

  return (
    <div className='App'>
      <ScrollToTop/>
      <VisitorLogger/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
