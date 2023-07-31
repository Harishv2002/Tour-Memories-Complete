import express from "express"
import dotenv from 'dotenv' 
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'  
import userRouter from "./routes/user.js"
import tourRouter from "./routes/tour.js"

//dotenv config
dotenv.config()

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/tour", tourRouter);
app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
      console.log('MongoDB connected')
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));