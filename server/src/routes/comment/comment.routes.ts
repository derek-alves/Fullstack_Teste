import { Router, Request, Response, query } from "express";
import { getRepository } from "typeorm";

import Post from "../../models/Post";

import CreateCommentService from "../../services/comment/CreateCommentService";

const commentRouter = Router();

commentRouter.post(
  "/:id/comments",
  async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { comment } = request.body;

      const post_id = Number(id);

      const createComment = new CreateCommentService();

      const post = await createComment.execute({ post_id, comment });
      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
);

commentRouter.get(
  "/:id/comments",
  async (request: Request, response: Response) => {
    const postRepository = getRepository(Post);
    const { id } = request.params;
    const post = await postRepository
      .createQueryBuilder("posts")
      .leftJoinAndSelect("posts.comment", "comment")
      .where("posts.id = :id", { id })
      .getOne();

    const comment = post?.comment;
    if (Object(comment).length === 0) {
      response.status(404).json({ message: "comentário não encontrado" });
    }
    return response.json(comment);
  }
);

export default commentRouter;
