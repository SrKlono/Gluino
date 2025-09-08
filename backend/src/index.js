import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

connectDB();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
