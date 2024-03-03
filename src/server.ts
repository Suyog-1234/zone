import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import commonAuthRoutes from "./routes/common-auth-routes/auth.routes";
import FirmRoutes from "./routes/firm-routes/firm.routes";

// express server initailization
dotenv.config()
const app = express();

//default middleware

app.use(express.json());
app.use(cors({}));

// server routes

app.use("/api/auth",commonAuthRoutes)
app.use("/api/firm",FirmRoutes)
 
// port listening 
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})