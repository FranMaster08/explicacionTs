import { Router, Request, Response } from "express";
import userController from "../controller";
const controller = new userController();

const router: Router = Router();
router.get("/", controller.getusers);

export default router;
