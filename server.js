import express from "express";
import PizzaRouter from "./controllers/pizzaController.js"

const app= Express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/pizzas", PizzaRouter);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})