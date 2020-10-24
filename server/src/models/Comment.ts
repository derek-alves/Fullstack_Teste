import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Post from "./Post";

@Entity("comment")
class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  comment: string;

  @Column()
  post_id:string;

  @ManyToOne(()=> Post,post => post.comment)
  @JoinColumn({name:'post_id'})
  post:Post;
}

export default Comment;
