import React from 'react';
import {IoIosCloseCircleOutline} from 'react-icons/io';

 import './styles.css';

interface modalClose{
  onClose:Function;
}

const ModalCreatePost : React.FC<modalClose> = (props) => {
  return(
    <div className="modal">
      <div className="container">
      
          <button onClick={()=>props.onClose} className="close">
          <IoIosCloseCircleOutline color="black" size="30px"/>
          </button>
          
          <div className="content">
             <h4 className="titlePost">Novo post</h4>
              <textarea placeholder="Compartilhe um pensamento hoje."></textarea>
              <button className="buttonPost">publicar</button>
          </div>  
      </div> 
       
    </div>
  );
}

export default ModalCreatePost;