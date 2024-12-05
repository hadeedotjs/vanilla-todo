const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' 
}))


app.use(express.json());



app.post("/todo", (req,res)=>{
    const todoTitle = req.body.todoTitle
    const todo = req.body.todo
    const output = {todoTitle: todoTitle, todo: todo}
    res.json(output)
})

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});


