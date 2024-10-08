import { Router } from "express";

import PostRoutes from "./post.routes";

const router = Router();

router.use("/posts", PostRoutes);

export default router;
