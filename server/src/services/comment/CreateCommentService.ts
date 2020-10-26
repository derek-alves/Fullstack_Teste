import { getRepository } from "typeorm";
import Comment from "../../models/Comment";

interface Request {
  comment: string;
  post_id: number;
}

class CreateCommentService {
  public async execute({comment,post_id}: Request): Promise<Comment> {
  
    const commentRepository = getRepository(Comment);

    const comments = commentRepository.create({
      comment,
      post_id
    });

    await commentRepository.save(comments);

    return comments;
  }
}

export default CreateCommentService;
