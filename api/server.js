import express from "express"
import { connectToMongoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const app = express()
const PORT = 8000

// middleware to parse request
app.use(express.json());

// Connect to Mongo Db
connectToMongoDb()


// Task Routes | Controller
app.use('/api/tasks', taskRouter)

// start a server
app.listen(PORT, (error)=>{
  error ? 
    console.log("Error", error) : 
    console.log("Your seerver is running at http://localhost:" + PORT)
})