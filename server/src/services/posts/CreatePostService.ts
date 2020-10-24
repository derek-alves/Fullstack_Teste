import { startOfHour } from "date-fns";
import { query, response } from "express";
import { getRepository } from "typeorm";

import Post from "../../models/Post";

interface Request {
  message: string;
}

class CreatePostService {
  public async execute( message: Request): Promise<Post> {

    const postRepository = getRepository(Post);

    const post = postRepository.create(message);

    await postRepository.save(post);

  
    return post;
  }
}

export default CreatePostService;
