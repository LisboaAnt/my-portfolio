import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import './App.scss';

import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './ts/ScrollTop';
import VisitorLogger from './components/VisitorLogger/VisitorLogger';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      const languagePrefix = storedLanguage.substring(0, 2); // Pegar os dois primeiros caracteres
      i18n.changeLanguage(storedLanguage);
      document.documentElement.lang = languagePrefix; // Define a linguagem no elemento HTML
    }
  }, [i18n]);

  return (
    <div className='App'>
      <ScrollToTop />
      <VisitorLogger />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
