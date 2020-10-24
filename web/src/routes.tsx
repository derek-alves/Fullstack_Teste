import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Posts from './pages/Posts';

function Routes(){
  return(
    <BrowserRouter>
        {/* <Route path='/' exact component={LandingPage}/> */}
        <Route path='/' component={Posts}/>
    </BrowserRouter>
  );
}

export default Routes;