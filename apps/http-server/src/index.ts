import  express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/",(req , res  ) => {
    
    return res.send("hi this is the msg from server.");
})

app.get("/signup", async (req , res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data : {
            username,
            password
        }
    })
    res.json( { message : "user signed up successfully !", id: user.id});
})

app.listen(3000);