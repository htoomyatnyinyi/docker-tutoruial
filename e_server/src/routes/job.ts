import express from "express";
import { getJobs, createJob } from "../controllers/job";
const router = express.Router();

router.get("/", getJobs);
router.post("/", createJob);

export default router;
