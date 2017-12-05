import { Request, Response } from "express";

const test: string = "Samuel";

export default class IndexController {
  public static hello(req: Request, res: Response, next: Function): void {
    res.send("Hallå Samuel!");
  }
}
