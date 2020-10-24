import { Router, Request, Response, query } from "express";
import { getRepository } from "typeorm";

import Post from "../../models/Post";

import CreatePostService from "../../services/posts/CreatePostService";

const postRouter = Router();


postRouter.get("/:id/comments", async (request: Request, response: Response) => {
  const postRepository = getRepository(Post);
  const { id } = request.params;
  const post = await postRepository.createQueryBuilder('posts')
    .leftJoinAndSelect("posts.comment", "comment")
    .where("posts.id = :id", { id })
    .getOne();

    if(!!post?.comment){
      response.status(404);
    } 
  
  return response.json(post?.comment);
});


postRouter.get("/", async (request: Request, response: Response) => {
  const postRepository = getRepository(Post);

  const posts = await postRepository.find();

  return response.json(posts);
});

postRouter.get("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const postRepository = getRepository(Post);

    const post = await postRepository.findOne(id);
    
    if(!post){
      response.status(404);
    }

    return response.json(post);
  } catch (error) {
    return response.status(404);
  }
});


postRouter.post("/", async (request: Request, response: Response) => {
  try {
    const message = request.body;
    const createPost = new CreatePostService();

    const post = await createPost.execute(message);

    return response.json(post);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default postRouter;
