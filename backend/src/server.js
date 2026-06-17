import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notesRouter.js";
import { connectDB } from "./conf/db.js";
import dns from "dns";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

dotenv.config();

dns.setServers([
   '1.1.1.1',
   '8.8.8.8'
])

const app = express();
const port = process.env.PORT || 5001
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
   app.use(cors({
      origin: "http://localhost:5173",
   }));
}
app.use(express.json());
app.use(rateLimiter);

app.use("/notes", notesRouter);
if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "../frontend/dist")));
   app.get("/{*splat}", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
   })
}

connectDB().then(() => {
   app.listen(port, () => {
      console.log("Server started on Port: 5001");
   });
});