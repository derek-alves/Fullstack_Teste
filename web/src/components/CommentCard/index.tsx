import React from 'react';

import './styles.css';

interface commentCardProps{
  id:number;
  content:string;
}
const CommentCard: React.FC<commentCardProps> = (props) => {
  return (
    <div className="comentario">
             <strong className="post_id">id: {props.id}</strong>
             <p>{props.content}</p>  
    </div>   
  );
}

export default CommentCard;