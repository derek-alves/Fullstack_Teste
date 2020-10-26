import React from 'react';

import './styles.css';

export interface commentCardProps{
  id:number;
  comment:string;
}
const CommentCard: React.FC<commentCardProps> = (props) => {
  return (
    <div className="comentario">
             <strong className="post_id">id: {props.id}</strong>
             <p>{props.comment}</p>  
    </div>   
  );
}

export default CommentCard;