import { Request, Response } from "express";
import prisma from "../configs/database";

const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

type FormData = {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
};

// Example: Create a job (requires authentication and authorization in a real app)
const createJob = async (
  req: Request<{}, {}, FormData>,
  res: Response
): Promise<void> => {
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

// //index.js

// // Example: Get all jobs
// app.get("/jobs", async (req, res) => {
//   try {
//     const jobs = await prisma.job.findMany();
//     res.json(jobs);
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     res.status(500).json({ error: "Failed to fetch jobs" });
//   }
// });

// // Example: Create a job (requires authentication and authorization in a real app)
// app.post("/jobs", async (req, res) => {
//   try {
//     const { title, description, company, location, salary } = req.body;
//     const newJob = await prisma.job.create({
//       data: {
//         title,
//         description,
//         company,
//         location,
//         salary,
//       },
//     });
//     res.status(201).json(newJob);
//   } catch (error) {
//     console.error("Error creating job:", error);
//     res.status(500).json({ error: "Failed to create job" });
//   }
// });

// // Add more routes for users, job applications, search, etc.
