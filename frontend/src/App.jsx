import React, { useState } from 'react';
import Footer from './components/Footer';
import { Premios } from './components/Premios';
import './index.css';

function App() {
  const [language, setLanguage] = useState('es');

  const changeToSpanish = () => setLanguage('es');
  const changeToCatalan = () => setLanguage('cat');
  const changeToEnglish = () => setLanguage('en');

  return (
    <>
      <Premios language={language} changeToCatalan={changeToCatalan}
       changeToEnglish={changeToEnglish} changeToSpanish={changeToSpanish} />
      <Footer language={language} />
    </>
  );
}

export default App;
