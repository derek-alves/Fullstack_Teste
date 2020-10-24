import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany} from "typeorm";
import Comment from './Comment';

@Entity("posts")
class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  message: string;

  @OneToMany(()=>Comment, comment => comment.post,{
    cascade:['insert','update']
  })
  @JoinColumn({name:'post_id'})
  comment:Comment;


}

export default Post;
