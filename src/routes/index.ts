import { Router, Request, Response } from "express";
import user from "./user.routes";
const router: Router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send(`Hola mundo`);
});
router.use("/user" , user)

export default router;
