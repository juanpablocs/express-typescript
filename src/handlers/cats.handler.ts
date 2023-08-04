import { Request, Response }  from "express";
import { AllCatsUseCase } from "../usecases/cats.usecase";

export const AllCatsHandler = (req:Request, res:Response)=> {
  const cats = AllCatsUseCase();
  res.json(cats);
}