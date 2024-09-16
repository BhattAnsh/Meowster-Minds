import mongoose from "mongoose";
import { startServer } from "../index.js";

export const connectDb = () =>{
    mongoose.connect("mongodb+srv://Admin:9013@sehatsaathidb.zqflosc.mongodb.net/Test-API?retryWrites=true&w=majority&appName=SehatSaathiDB").then(()=>{
        console.log("Database connected");
        startServer();
    }).catch((error) =>{
        console.log(error);
    })
}
