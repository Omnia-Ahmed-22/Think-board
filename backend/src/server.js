import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notesRouter.js";
import { connectDB } from "./conf/db.js";
import dns from "dns";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

dns.setServers([
   '1.1.1.1',
   '8.8.8.8'
])

const app = express();
const port = process.env.PORT | 5001

app.use(express.json());
app.use(rateLimiter);
app.use(cors({
   origin: "http://localhost:5173",
}));
app.use("/notes", notesRouter);

connectDB().then(() => {
   app.listen(port, () => {
      console.log("Server started on Port: 5001");
   });
});