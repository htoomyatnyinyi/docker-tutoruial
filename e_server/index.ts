// src/index.ts
import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json()); // For parsing JSON request bodies

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("Jobseeker Backend is running!");
});

// Example: Get all jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

// Example: Create a job (requires authentication and authorization in a real app)
app.post("/jobs", async (req, res) => {
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
});

// Add more routes for users, job applications, search, etc.

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Gracefully close PrismaClient on application shutdown
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
