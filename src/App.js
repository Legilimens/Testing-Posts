import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Content from './components/Content/Content';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <ContentWrapper>
          <Route path="/" exact component={Content} />
          <Route path="/about" component={About} />
        </ContentWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
