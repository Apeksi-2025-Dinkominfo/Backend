import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import FormRoutes from "./routes/formRoutes.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(FormRoutes);

app.listen(process.env.APP_PORT, () =>{
    console.log("Server Up and Running....");
});