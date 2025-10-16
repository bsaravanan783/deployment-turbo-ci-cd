import  express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/",(req , res  ) => {
    
    return res.send("hi this is the msg from server.");
})

app.get("/signup", (req , res)=> {
    const username = req.body.username;
    const password = req.body.password;
    res.send("user signed up successfully !");
})

app.listen(3000);