import express from "express";
import cors from "cors";
import prisma from "./src/configs/database";
import { PORT } from "./src/utils/secret";

import meRoutes from "./src/routes/me";
import jobRoutes from "./src/routes/job";

const app = express();

app.use(express.json()); // For parsing JSON request bodies
// app.use(cors());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://your-production-frontend.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify allowed methods
    credentials: true, // If you need to send cookies or authorization headers across origins
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 200
  })
);

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("Jobseeker Backend is running!");
});

app.use("/", meRoutes);
app.use("/jobs", jobRoutes);

const port = PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Gracefully close PrismaClient on application shutdown
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
