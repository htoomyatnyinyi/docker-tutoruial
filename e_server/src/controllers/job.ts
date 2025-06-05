import prisma from "../configs/database";
import { Request, Response } from "express";

interface CreateJobData {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
}

interface GetJobsData extends CreateJobData {
  id: number;
  postedAt: Date;
  updatedAt: Date;
}

const getJobs = async (req: Request, res: Response): Promise<any> => {
  try {
    const jobs: GetJobsData[] = await prisma.job.findMany();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

const createJob = async (
  req: Request<{}, {}, CreateJobData>,
  res: Response
): Promise<any> => {
  try {
    const { title, description, company, location, salary } = req.body;
    const newJob = await prisma.job.create({
      data: {
        title,
        description,
        company,
        location,
        salary,
      },
    });
    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

export { getJobs, createJob };
