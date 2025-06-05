import express from "express";
import { jsonData, me } from "../controllers/me";
const router = express.Router();

router.get("/", me);
router.get("/data", jsonData);

export default router;
