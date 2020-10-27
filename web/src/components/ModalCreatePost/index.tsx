import React, { useCallback, useState ,FormEvent} from 'react';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import api from "../../services/api";
 import './styles.css';

interface modalClose{
  onClose:Function;
}

const ModalCreatePost : React.FC<modalClose> = (props) => {
   const [message, setMessage]=useState('')
   
  async function handleCreatePost(e:FormEvent){
    console.log(message)
    await api.post('/posts',{
      message
      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log('error notification')
        return Promise.reject(error);
      })
      window.location.reload(true)
  
  }
  

  return(
    <form className="modal" onSubmit={handleCreatePost}>
      <div className="container">
      
          <button onClick={()=>props.onClose} className="close">
          <IoIosCloseCircleOutline color="black" size="30px"/>
          </button>
          
          <div className="content">
             <h4 className="titlePost">Novo post</h4>
              <textarea 
              placeholder="Compartilhe um pensamento hoje."
              name="message"
              value={message}
              onChange={(e)=>{ setMessage(e.target.value) }} 
              ></textarea>
              <button type="submit" className="buttonPost">publicar</button>
          </div>  
      </div> 
       
    </form>
  );
}

export default ModalCreatePost;