import React from 'react';
import Home from './Home';
import Para from './Para';
import './Style.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Header';
import { Switch } from 'react-router-dom';
import ErrorPage from './Pages/Notfound';





function App() {
  return (

        <div>
          <BrowserRouter>
          <Header />
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route component={ErrorPage} /> 
          </Switch>

          </BrowserRouter>


        



          
        </div>
 
  );
}

export default App;