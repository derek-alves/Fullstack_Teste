import React from 'react';
import { Link } from 'react-router-dom';
import {FaFontAwesome} from 'react-icons/fa';

import './styles.css';

interface HeaderProps{
   title:string;
   icon:string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="page-header"> 
            <div className="top-bar-container">
               <Link to='/'>
                  <FaFontAwesome name={props.icon} color='#FFFFFF' size='2.5rem'/>
               </Link>
               <h2>Test</h2>
            </div>

            <div className="header-content">
               <strong>{props.title}</strong>
               {props.children}
            </div>
           
      </header>
  );
};

export default Header;
