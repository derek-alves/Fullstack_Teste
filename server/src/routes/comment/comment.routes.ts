import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";

import Comment from "../../models/Comment";

import CreateCommentService from "../../services/comment/CreateCommentService";

const commentRouter = Router();

commentRouter.post(
  "/comments",
  async (request: Request, response: Response) => {
    try {
      const data = request.body;

      const createPost = new CreateCommentService();

      const post = await createPost.execute(data);
      return response.json(post);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
);

commentRouter.get("/:id/comments", async (request: Request, response: Response) => {
  const commentRepository = getRepository(Comment);

  const id = request.params;
  
  const comments = await commentRepository.find(id);

  return response.json(comments);
});

commentRouter.get("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const commentRepository = getRepository(Comment);

    const comment = await commentRepository.findOne(id);

    return response.json(comment);
  } catch (error) {
    return response.status(404);
  }
});

export default commentRouter;
