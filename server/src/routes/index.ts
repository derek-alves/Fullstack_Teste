import { Router } from "express";

import commentRouter from "./comment/comment.routes";
import postRouter from "./post/post.routes";


const routes = Router();

routes.use("/posts", postRouter);
routes.use("/posts", commentRouter);

export default routes;