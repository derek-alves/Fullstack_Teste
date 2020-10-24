import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import './styles.css';

interface HeaderProps{
   title:string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="page-header"> 
            <div className="top-bar-container">
               <Link to='/'>
                  <FaArrowLeft color='#FFFFFF' size='2.5rem'/>
               </Link>
               <h2>Test</h2>
            </div>

            <div className="header-content">
               <strong>{props.title}</strong>
            </div>
      </header>
  );
};

export default Header;
