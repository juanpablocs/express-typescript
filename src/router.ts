import express from "express";
import { AllCatsHandler } from "./handlers/cats.handler";

const router = express.Router();

router.get('/cats', AllCatsHandler);

export default router;