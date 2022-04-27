import React from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Diet from './Diet/Diet';
import Shooping from './Shooping/Shooping';

const App = () => {
  return (
    <article>
      <Header/>
      <Diet/>
      <Shooping/>
      <Footer/>
    </article>
  );
}

export default App;