import { getRepository } from "typeorm";
import Comment from "../../models/Comment";

interface Request {
  comment: string;
  post_id: string;
}

class CreateCommentService {
  public async execute(data: Request): Promise<Comment> {
    const { comment, post_id } = data;
    const commentRepository = getRepository(Comment);

    const comments = commentRepository.create({
      comment,
      post_id,
    });

    await commentRepository.save(comments);

    return comments;
  }
}

export default CreateCommentService;
