import express from "express";
import cors from "cors";
// import prisma from "./src/configs/database";
import { PORT } from "./src/utils/secret";

import meRoutes from "./src/routes/me";
import jobRoutes from "./src/routes/job";

const app = express();

app.use(express.json()); // For parsing JSON request bodies
app.use(cors());

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("Jobseeker Backend is running!");
});

app.use("/me", meRoutes);
app.use("/job", jobRoutes);

const port = PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// // Gracefully close PrismaClient on application shutdown
// process.on("beforeExit", async () => {
//   await prisma.$disconnect();
// });
