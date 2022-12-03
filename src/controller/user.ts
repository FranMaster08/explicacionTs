import { Request, Response } from "express";
import userServices from "../service";
export class userController {
  service: userServices;
  constructor() {
    this.service = new userServices();
  }
  getusers = async (req: Request, res: Response): Promise<void> => {
    const result = await  this.service.getUserTs();
    res.json(result);
  };
}
