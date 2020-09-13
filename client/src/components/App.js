import React from 'react';
import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Section />
      <Footer />
    </React.Fragment>
  );
}

export default App;
