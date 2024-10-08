import { Router } from "express";

import { postsConstroller } from "./../controllers";

const router = Router();

router.post("/", postsConstroller.createPost);
router.get("/", postsConstroller.getAllPosts);
router.get("/:id", postsConstroller.getOnePost);
router.put("/:id", postsConstroller.updatePost);
router.delete("/:id", postsConstroller.deletePost);

export default router;
