import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.scss';

import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './ts/ScrollTop';
import VisitorLogger from './components/VisitorLogger/VisitorLogger';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <div className='App'>
      <ScrollToTop />
      <VisitorLogger />
      <NavBar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
