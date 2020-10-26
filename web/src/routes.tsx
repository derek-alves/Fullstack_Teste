import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import PostInfo from './pages/PostInfo';
import Posts from './pages/Posts';

function Routes(){
  return(
    <BrowserRouter>
       <Route path='/' exact component={Posts}/>
       <Route path='/post/:id' component={PostInfo}/> 
        
    </BrowserRouter>
  );
}

export default Routes;