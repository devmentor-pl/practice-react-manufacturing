import React from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Diet from './Diet/Diet';
import Shooping from './Shooping/Shooping';

import StyledApp from './App.styled';

const App = () => {
  return (
    <StyledApp>
      <Header/>
      <Diet/>
      <Shooping/>
      <Footer/>
    </StyledApp>
  );
}

export default App;