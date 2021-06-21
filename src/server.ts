import express from "express";


const app = express();

app.get("/test", (req:any, res:any) => {
    return res.send("Olá nlw")
})

app.post("/test-post", (req:any, res:any) => {
    return res.send("Olá nlw, metodo post")
})

app.listen(3000, () => console.log("server is running"))