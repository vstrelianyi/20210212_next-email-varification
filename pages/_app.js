
import 'styles/index.scss';

import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer, Navbar, Hero } from 'components/shared';
import { RestfulProvider } from 'restful-react';

const App = ( { Component, pageProps, } ) => {
  const isHome = Component.name === 'Home';
  const Wrapper = Component.name === 'PortfolioDetail' ? React.Fragment : Container;

  const base = 'http://localhost:3001/api';
  // const base = process.env.DOMAIN;

  return (
    <RestfulProvider base={ base }>
      <div className="portfolio-app">
        <Navbar />
        { isHome && <Hero /> }
        <Wrapper>
          <Component { ...pageProps } />
        </Wrapper>
        { isHome && <Footer /> }
      </div>
    </RestfulProvider>
  );
};

export default App;
